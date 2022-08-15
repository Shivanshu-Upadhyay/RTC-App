import React from 'react'
import Card from '../../../commonComp/card/Card'
import Button from '../../../commonComp/button/Button'
import styles from './otp.module.css'
import { useState } from 'react'
import { verifyOtp } from '../../../http/index'
import {useSelector,useDispatch} from "react-redux"
import {setAuth} from "../../../redux/slice/authSlice"
function Otp({nextStep}) {
  let dispatch = useDispatch()
  const [otp,setOtp]=useState('');
  const {phone,hash} = useSelector((state)=>state.authReducer.otp)
  const handleSubmit = async()=>{
    try {
    const {data} = await verifyOtp({otp,phone,hash})
    console.log(data);
    dispatch(setAuth({user:data.user}))
    nextStep()
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <Card>
    <div className="flex justify-center items-center font-bold text-lg mt-12 mb-7">
      <img src="./imgs/lock.svg" alt="not found" className="mx-2" />
      Enter your OTP
    </div>

    <div className="leading-8 px-20 my-5">

     <input type="text" placeholder='1234' className={`${styles.number} rounded-xl text-center`} value={otp} onChange={(e)=>setOtp(e.target.value)} />
     <div className=' text-[#C4C5C5] my-3 font-extralight' >Didn’t receive? <span className=' font-bold cursor-pointer'>Tap to resend</span> </div>
    </div>
  <div className='my-4'>

    <Button text="Next" handleClick={handleSubmit} />
  </div>
   
  </Card>
  )
}

export default Otp