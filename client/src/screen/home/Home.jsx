import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../http";
import { setAuth } from "../../redux/slice/authSlice";
import styles from "./home.module.css";

function Home() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const logoutUser = async() => {
    try {
     const {data} = await logout();
      dispatch(setAuth(data));
      navigate('/')
    }catch(error){
      console.log(error);
    }
  
  };
  return (
    <div className={styles.box}>
      <div className={`${styles.headerBox}`}>
        <header className={`${styles.header} p-3`}>
          <img src="./imgs/logo.svg" alt="" />
        </header>
        {isAuth ?<button className={`${styles.logoutBtn}`} onClick={logoutUser}>
          Logout
        </button>:null }
      </div>
      <section className={styles.boxSection}>
        <Outlet />
      </section>
    </div>
  );
}

export default Home;
