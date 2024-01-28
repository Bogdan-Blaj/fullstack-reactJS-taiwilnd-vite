import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <div
        className={`{${theme} ${theme == "dark" ? "bg-[#121212]" : "bg-white"}`}
      >
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
