import "./Cart.css";

function Cart({ cart, removeFromCart }) {
  const totalPrice = cart.reduce((sum, item) => {
    const price = typeof item.price === 'string' ? parseFloat(item.price.replace('₹', '')) : item.price;
    return sum + price;
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some books to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart ({cart.length} items)</h2>

      <div className="cart-items">
        {cart.map(item => {
          const price = typeof item.price === 'string' ? parseFloat(item.price.replace('₹', '')) : item.price;
          return (
            <div className="cart-item" key={item._id}>
              <img src={item.image} alt={item.title} />
              <div className="cart-info">
                <h4>{item.title}</h4>
                <p className="author">by {item.author}</p>
                <p className="price">₹{price}</p>
              </div>
              <button onClick={() => removeFromCart(item._id)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>

      <div className="cart-summary">
        <h3>Total: ₹{totalPrice}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
