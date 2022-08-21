import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../../screen/home/Home";
import Welcome from "../../components/welcome/Welcome";
import Register from "../../screen/register/Register";
import { useLoadingWithRef } from "../../hooks/useLoadingWithref";
import Loader from "../Loader/Loader";
import Room from "../Rooms/Room";
import RoomPage from "../../screen/room/RoomPage";
function Routers() {
  const { loading } = useLoadingWithRef();
  const { isAuth } = useSelector((state) => state.authReducer);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          {isAuth ? (
            <Route path="/" element={<Home />}>
              <Route path="/auth-page" element={<Room />} />
              <Route path="/register" element={<Register />} />
              <Route path="/room/:id" element={<RoomPage />} />
            </Route>
          ) : (
            <Route path="/" element={<Home />}>
              <Route path="/" element={<Welcome />} />
              <Route path="/register" element={<Register />} />
            </Route>
          )}
        </Routes>
      )}
    </>
  );
}

export default Routers;
