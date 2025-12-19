import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>📚 Book Store</h2>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          <span className="nav-icon">🏠</span>
          <span className="nav-text">Home</span>
        </Link>
        <Link to="/books" className="nav-link">
          <span className="nav-icon">📖</span>
          <span className="nav-text">Books</span>
        </Link>
        <Link to="/cart" className="nav-link">
          <span className="nav-icon">🛒</span>
          <span className="nav-text">Cart ({cartCount})</span>
        </Link>
        <Link to="/contact" className="nav-link">
          <span className="nav-icon">📞</span>
          <span className="nav-text">Contact</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
