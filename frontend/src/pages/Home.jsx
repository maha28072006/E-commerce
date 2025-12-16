// function Home() {
//   return (
//     <div className="container">
//       <h1>Home Page</h1>

//       <div className="highlight">
//         Welcome to our Home page..
//       </div>

//       <p>We Selling the products...</p>

//       <p>
//         This is our main homepage where customers can explore our website.
//       </p>
//     </div>
//   );
// }

// export default Home;

import { Link } from "react-router-dom";
import "./Home.css";


function Home() {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-text">
          <h1>Your One-Stop <br /> Electronic Market</h1>
          <p>
            Welcome to e-shop, a place where you can buy everything about
            electronics. Sale every day!
          </p>
          {/* <button>Shop Now</button> */}
          <Link to="/products">
        <button className="shop-btn">Shop Now</button>
      </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
            alt="laptop"
          />
        </div>
      </div>

      {/* FEATURES */}
      <div className="features">
        <div className="feature-box">✅ 24/7 Support</div>
        <div className="feature-box">🔒 Secure Payment</div>
        <div className="feature-box">🚚 Fast Shipping</div>
        <div className="feature-box">🔄 Easy Returns</div>
      </div>
    </div>
  );
}

export default Home;


