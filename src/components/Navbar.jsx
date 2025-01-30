import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/Language";
import { translationNavbar } from "../utils/translations";
import { FaLanguage, FaMoon, FaSignOutAlt, FaSun } from "react-icons/fa";
import { useMode } from "../context/Mode";
import { toast } from "react-toastify";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { mode, toggleMode } = useMode();
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("name");
    toast.success(translationNavbar[language].logout);
    navigate("/");
  }

  return (
    <nav className={`navbar ${mode}`}>
      <div className="logo">{translationNavbar[language].title}</div>
      <div className={`nav-menu ${mode}`}>
        <Link to="/notes" className={`menu-item ${mode}`}>
          {translationNavbar[language].notesList}
        </Link>
        <Link to="/notes/new" className={`menu-item ${mode}`}>
          {translationNavbar[language].addNote}
        </Link>
        <Link to="/notes/archived" className={`menu-item ${mode}`}>
          {translationNavbar[language].archive}
        </Link>
      </div>
      <div className={`nav-icons ${mode}`}>
        <button onClick={toggleMode} className={`icon-button`}>
          {mode === "dark" ? <FaSun /> : <FaMoon />}
        </button>
        <button onClick={toggleLanguage} className={`icon-button`}>
          <FaLanguage />
        </button>
        <button onClick={handleLogout} className={`icon-button`}>
          <FaSignOutAlt /> {localStorage.getItem("name")}
        </button>
      </div>
    </nav>
  );
}
