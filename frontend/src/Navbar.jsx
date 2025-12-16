// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/products">Products</Link>
//       <Link to="/cart">Cart</Link>
//       <Link to="/contact">Contact Us</Link>
//     </nav>
//   );
// }

// export default Navbar;

// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav
//       style={{
//         padding: "15px",
//         background: "#222",
//         display: "flex",
//         gap: "20px"
//       }}
//     >
//       <Link to="/" style={{ color: "white" }}>Home</Link>
//       <Link to="/products" style={{ color: "white" }}>Products</Link>
//       <Link to="/cart" style={{ color: "white" }}>Cart</Link>
//       <Link to="/contact" style={{ color: "white" }}>Contact Us</Link>
//     </nav>
//   );
// }

// export default Navbar;



import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({cartCount})</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
