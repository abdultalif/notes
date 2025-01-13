import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-menu">
      <Link to="/" className="menu-item">
        Home
      </Link>
      <Link to="/notes/new" className="menu-item">
        Add Note
      </Link>
      <Link to="/notes/archived" className="menu-item">
        Archived Notes
      </Link>
    </nav>
  );
}
