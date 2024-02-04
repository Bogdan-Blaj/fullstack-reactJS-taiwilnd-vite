import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { Theme, ThemeContext } from "./Context/ThemeContext";

function App() {
  const { theme: contextTheme } = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("theme");
    return (storedTheme as Theme) || contextTheme || "dark";
  });

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setLocalTheme((storedTheme as Theme) || "dark");
  });

  return (
    <ThemeContext.Provider
      value={{ theme: localTheme, setTheme: setLocalTheme }}
    >
      <div
        className={`${localTheme} ${localTheme == "dark" ? "bg-[#121212]" : "bg-white text-black"}`}
      >
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
