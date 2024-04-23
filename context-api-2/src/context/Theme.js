import { useContext, createContext } from "react";

const ThemeContext = createContext({
  themeMode: "light",
  setTheme: () => {
    // empty function
  },
});

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
  return useContext(ThemeContext);
};
