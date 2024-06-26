import { useEffect, useState } from "react";
import Card from "./component/Card";
import ThemeBtn from "./component/ThemeBtn";
import { ThemeProvider } from "./context/Theme";

function App() {
  const [themeMode, setThemeMode] = useState("light"); // corrected this line

  const setTheme = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  //actual code
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, setTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
