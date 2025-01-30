import PropTypes from "prop-types";
import { createContext, useContext, useState, useEffect } from "react";

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const storedmode = localStorage.getItem("mode");
    if (storedmode) {
      setMode(storedmode);
    }
  }, []);

  useEffect(() => {
    // Mengatur kelas body berdasarkan mode
    document.body.classList.toggle("dark", mode === "dark");
    document.body.classList.toggle("light", mode === "light");
  }, [mode]);

  const toggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  return useContext(ModeContext);
};

ModeProvider.propTypes = {
  children: PropTypes.node,
};
