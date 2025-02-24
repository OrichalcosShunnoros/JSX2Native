import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Sun, Moon } from "lucide-react";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: "transparent",
        border: "none",
        color: "#ccc",
        cursor: "pointer",
        borderRadius: "25%",
        boxShadow: "0 0 5px #ccc",
        padding: "5px",
      }}
    >
      {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
    </button>
  );
};
