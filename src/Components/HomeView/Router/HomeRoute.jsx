import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeMain from "../Home/HomeMain/HomeMain";
import SignUp from "../Auth/SignUp/SignUp";
import SignIn from "../Auth/SignIn/SignIn";
import OnboardingOne from "../Auth/Onboarding/OnboardingOne";
import OnbordingTwo from "../Auth/Onboarding/OnbordingTwo";
import OnboardingThree from "../Auth/Onboarding/OnboardingThree";
import OnboardingFour from "../Auth/Onboarding/OnboardingFour";

const HomeRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/onboardingone" element={<OnboardingOne />} />
        <Route path="/onboardingtwo" element={<OnbordingTwo />} />
        <Route path="/onboardingthree" element={<OnboardingThree />} />
        <Route path="/onboardingfour" element={<OnboardingFour />} />
      </Routes>
    </>
  );
};

export default HomeRoute;
