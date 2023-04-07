import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeMain from "../Home/HomeMain/HomeMain";
import SignUp from "../Auth/SignUp/SignUp";
import SignIn from "../Auth/SignIn/SignIn";

const HomeRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default HomeRoute;
