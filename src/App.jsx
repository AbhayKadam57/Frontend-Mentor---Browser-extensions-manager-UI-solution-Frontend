import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import ExtensionList from "./components/ExtensionsList/ExtensionList";
import { useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(0);
  const { theme } = useSelector((state) => state.extension);

  return (
    <div
      className={`main ${
        theme === "light" ? "light-bg-gradient" : "dark-bg-gradient"
      }`}
    >
      <Header />
      <Filters />
      <ExtensionList />
    </div>
  );
}

export default App;
