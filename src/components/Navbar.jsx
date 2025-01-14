import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-menu">
      <Link to="/" className="menu-item">
        Catatan
      </Link>
      <Link to="/notes/new" className="menu-item">
        Tambah Catatan
      </Link>
      <Link to="/notes/archived" className="menu-item">
        Arsip
      </Link>
    </nav>
  );
}
