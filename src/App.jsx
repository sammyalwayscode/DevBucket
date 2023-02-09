import React from "react";
import { ThemeProvider } from "styled-components";
import HomeRoute from "./Components/HomeView/Router/HomeRoute";
import UserRoute from "./Components/Users/Router/UserRoute";
import { useContext } from "react";
import { GlobalProvider } from "./Components/Global/ContexGlobal/GlobalContex";

const App = () => {
  const { themes, theme } = useContext(GlobalProvider);
  return (
    <div>
      <ThemeProvider theme={themes[theme]}>
        <HomeRoute />
        <UserRoute />
      </ThemeProvider>
    </div>
  );
};

export default App;
