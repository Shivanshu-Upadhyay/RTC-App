import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../../screen/home/Home";
import Welcome from "../../components/welcome/Welcome";
import Register from "../../screen/register/Register";
import { useLoadingWithRef } from "../../hooks/useLoadingWithref";
import Loader from "../Loader/Loader";
function Routers() {
  const { loading } = useLoadingWithRef();
  const { isAuth } = useSelector((state) => state.authReducer);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Welcome />} />
            <Route path="/register" element={<Register />} />
            {isAuth?<Route path="/auth-page" element={"Welcome to room" } />:<Route path="/" element={<Welcome />} />}
            <Route path="*" element={<Welcome />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default Routers;
