import React,{useState,useEffect} from "react";
import Card from "../../../commonComp/card/Card";
import Button from "../../../commonComp/button/Button";
import styles from "./Avtar.module.css";
import {useDispatch,useSelector} from "react-redux"
import {setProfile} from "../../../redux/slice/activateSlice"
import {activated} from '../../../http/index'
import {setAuth} from "../../../redux/slice/authSlice"
import {useNavigate} from "react-router-dom";
import Loader from "../../Loader/Loader";
function Avtar({ nextStep }) {
  const {userName,profile_img} = useSelector(state=>state.activateReducer)
  const [img, setimg] = useState(profile_img?profile_img:"./imgs/profile.svg")
  const [loading, setloading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const chooseImg =(e)=>{
    const file =e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = function(){
      setimg(reader.result)
      dispatch(setProfile(reader.result))
    }
  }

  const handleSubmit = async()=>{
    setloading(true)
    if(!userName&&!img){return}
    try {
      const result =  await activated({name:userName,avatar:profile_img})
      console.log(result);
      
        dispatch(setAuth(result.data.user))
        navigate("/auth-page")
        
     
       
    } catch (error) {
      console.log(error);
    }finally{
      setloading(false)
    }
  
  }

  useEffect(()=>{
    return ()=>{setMounted(true)} 
    
  },[])
  return ( loading?<Loader/>:
    <Card>
      <div className="flex justify-center items-center font-bold text-lg mt-12 mb-7">
        <span className=" text-3xl">😎</span>Okay, Upload Your pick!
      </div>

      <div className=" flex justify-center items-center flex-col">
        <div className={`${styles.imgConatainer}`}>
          <img
            src={img}
            alt=""
            className="border-4 border-[#0077FF] rounded-full object-cover	 truncate"
          />
          
        </div>
        <div className=" text-[#0077FF] my-2 cursor-pointer"><input type="file" onChange={chooseImg} id="avtarInput" className="hidden"/> <label htmlFor="avtarInput">Choose a different photo</label> </div>
      </div>
      <div className=" text-[#C4C5C5] my-3 font-extralight">
        People use real names at codershouse :)
      </div>
      <div className="my-4">
        <Button text="Next" handleClick={handleSubmit} />
      </div>
    </Card>
  );
}

export default Avtar;
