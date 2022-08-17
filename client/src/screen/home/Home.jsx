import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../http";
import { setAuth } from "../../redux/slice/authSlice";
import styles from "./home.module.css";

function Home() {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const logoutUser = async () => {
    try {
      const { data } = await logout();
      dispatch(setAuth(data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.box}>
      <div className={`${styles.headerBox}`}>
        <header className={`${styles.header} p-3`}>
          <img src="./imgs/logo.svg" alt="" />
        </header>
        {isAuth ? (
          <div className="flex justify-center items-center">
            <span>{user?.name}</span>
            <img
              src={user?.avatar}
              alt="not found"
              className="rounded-full mx-2 "
              width="40"
              height="40"
            />
            <button className={`${styles.logoutBtn}`} onClick={logoutUser}>
              <i className={`fa-solid fa-right-from-bracket`} />
            </button>
          </div>
        ) : null}
      </div>
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default Home;
