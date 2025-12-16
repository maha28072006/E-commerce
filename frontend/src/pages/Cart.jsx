// import { useState, useEffect } from "react";

// function Cart() {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(savedCart);
//   }, []);

//   const handleRemove = (productId) => {
//     const updatedCart = cartItems.filter(item => item._id !== productId);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   if (cartItems.length === 0) {
//     return <div><h2>Your Cart is Empty!</h2></div>;
//   }

//   return (
//     <div>
//       <h1>Your Cart</h1>
//       {cartItems.map(item => (
//         <div key={item._id}>
//           <img src={item.image} alt={item.name} />
//           <h3>{item.name}</h3>
//           <p>₹{item.price}</p>
//           <button onClick={() => handleRemove(item._id)}>Remove</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Cart;





function Cart({ cart, removeFromCart }) {
  if (cart.length === 0) {
    return <h2>Your Cart is Empty!</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {cart.map(item => (
        <div
          key={item._id}
          style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}
        >
          <img src={item.image} alt={item.name} width="120" />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => removeFromCart(item._id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
