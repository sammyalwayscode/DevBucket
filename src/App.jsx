import React from "react";
import { ThemeProvider } from "styled-components";
import HomeRoute from "./Components/HomeView/Router/HomeRoute";
import UserRoute from "./Components/Users/Router/UserRoute";
import { useContext } from "react";
import { GlobalProvider } from "./Components/Global/ContexGlobal/GlobalContex";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { themes, theme } = useContext(GlobalProvider);
  return (
    <ThemeProvider theme={themes[theme]}>
      <Toaster />
      <HomeRoute />

      <UserRoute />
    </ThemeProvider>
  );
};

export default App;
