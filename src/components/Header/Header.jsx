import React from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/extensionSlice"; // Correct spelling

const Header = () => {
  const { theme } = useSelector((state) => state.extension);
  const dispatch = useDispatch();

  console.log(theme);

  const handleToggleChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`container header ${theme === "dark" && "dark"}`}>
      <div className="logo">
        <img src="/images/logo.svg" alt="logo" width="179" height="41" />
      </div>
      <div className="toggle" onClick={handleToggleChange}>
        <div className={`toggle-bg ${theme === "dark" && "dark-theme"}`}>
          {theme === "light" ? (
            <img src="/images/icon-moon.svg" alt="moon" />
          ) : (
            <img src="/images/icon-sun.svg" alt="sun" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
