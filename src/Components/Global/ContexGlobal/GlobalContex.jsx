import { useState } from "react";
import { createContext } from "react";
// import storage from "local-storage-fallback";

export const GlobalProvider = createContext();

export const GlobalState = ({ children }) => {
  const LightTheme = {
    pageBackground: "white",
    textColor: "#071E48",
    gradentBackground: "linear-gradient(to right, #EEEEEE, #FBFBFB)",
    compGradent: "linear-gradient(to right, #ffffff, #f6f9ff, #ffffff)",
    footerBgColor: "#f6f9ff",
    footerTextTitleColor: "#273B60",
    footerTextNavColor: "#273B60",
    userHeaderActiveNav: "1px solid #1c1c1c",
    userDetailPageBackgroundColor: "#f9f9f9",
    userDetailPageBackgroundColorCard: "#fff",
  };

  const DarkTheme = {
    pageBackground: "#212429",
    textColor: "#fff",
    gradentBackground:
      "linear-gradient(to bottom right, #2d2f33, #2c2e32, #222529)",
    compGradent:
      "linear-gradient(to bottom right, #222529, #272A2F, #2A2D31, #2A2C31, #272A2F, #222529)",
    footerBgColor: "linear-gradient(to bottom, #212429, #1A1C20  )",
    footerTextTitleColor: "#fafafa",
    footerTextNavColor: "#D1E0FB",
    userHeaderActiveNav: "1px solid #377dff",
    userDetailPageBackgroundColor: "#212429",
    userDetailPageBackgroundColorCard: "#2A2D31",
  };

  const themes = {
    light: LightTheme,
    dark: DarkTheme,
  };

  // const storeThemeChoice = () => {
  //   const saveTheme = storage.getItem("theme");
  //   return saveTheme
  //     ? JSON.parse(saveTheme)
  //     : { themes: "light", myTheme: "light" };
  // };

  const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   storage.setItem("theme", JSON.stringify(theme));
  // }, [theme]);

  return (
    <GlobalProvider.Provider value={{ theme, themes, setTheme }}>
      {children}
    </GlobalProvider.Provider>
  );
};
