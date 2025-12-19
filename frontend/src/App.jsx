import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

function App() {
  const [cart, setCart] = useState([]);

  // ADD TO CART
  const addToCart = (book) => {
    setCart(prevCart => {
      const exists = prevCart.find(item => item._id === book._id);
      if (exists) {
        alert("Book already in cart!");
        return prevCart;
      }
      alert("Book added to cart!");
      return [...prevCart, book];
    });
  };

  // REMOVE FROM CART
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item._id !== id));
  };

  return (
    <>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books addToCart={addToCart} />} />
        <Route path="/book/:id" element={<BookDetail addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
