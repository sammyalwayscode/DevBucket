import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  let auth = { token: false };
  const activeUser = useSelector((state) => state.myReducer.currentUser);
  return activeUser.email ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateRoute;
