import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <div className="hero">
          <h1>Online Book Store</h1>
          <p>Discover your next favorite book</p>
          <Link to="/books">
            <button className="hero-btn">Shop Books</button>
          </Link>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">📚 Wide Collection</div>
        <div className="feature-card">🚚 Fast Delivery</div>
        <div className="feature-card">💳 Secure Payment</div>
      </div>
    </>
  );
}

export default Home;
