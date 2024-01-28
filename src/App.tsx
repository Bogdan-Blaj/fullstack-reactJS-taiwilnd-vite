import React, { useContext, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { Theme, ThemeContext } from "./Context/ThemeContext";

function App() {
  const [localTheme, setLocalTheme] = useState<Theme>(
    () => useContext(ThemeContext).theme,
  );

  return (
    <ThemeContext.Provider
      value={{ theme: localTheme, setTheme: setLocalTheme }}
    >
      <div
        className={`{${localTheme} ${localTheme == "dark" ? "bg-[#121212]" : "bg-white"}`}
      >
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
