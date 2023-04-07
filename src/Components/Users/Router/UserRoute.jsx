import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Header from "../Header/Header";
import DetailPage from "../Home/DetailPage";
import Share from "../Home/Share";
import Favourite from "../Home/Favourite";
import OnboardingOne from "../Onboarding/OnboardingOne";
import OnbordingTwo from "../Onboarding/OnbordingTwo";
import OnboardingThree from "../Onboarding/OnboardingThree";
import OnboardingFour from "../Onboarding/OnboardingFour";
import PrivateRoute from "../../Global/PrivateRoute/PrivateRoute";

const UserRoute = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/project/share" element={<Share />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/onboardingone" element={<OnboardingOne />} />
          <Route path="/onboardingtwo" element={<OnbordingTwo />} />
          <Route path="/onboardingthree" element={<OnboardingThree />} />
          <Route path="/onboardingfour" element={<OnboardingFour />} />
        </Route>
      </Routes>
    </>
  );
};

export default UserRoute;
