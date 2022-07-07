import React, { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      {theme === "dark" ? (
        <div
          className={styles.ThemeToggle}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiSun className={styles.themeIcons} />
          Light Mode
        </div>
      ) : (
        <div
          className={styles.ThemeToggle}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiMoon className={styles.themeIcons} />
          Dark Mode
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
