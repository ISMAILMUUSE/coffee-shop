import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CheckoutPage() {
  const { items, cartTotal, cartCount } = useCart();

  if (cartCount === 0) {
    return (
      <main className="page checkout-page">
        <h1>Checkout</h1>
        <p>Your cart is empty. Add items from the menu first.</p>
        <Link to="/menu" className="btn btn-primary">
          View Menu
        </Link>
      </main>
    );
  }

  return (
    <main className="page checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-summary">
        <h2>Order Summary</h2>
        <ul className="checkout-list">
          {items.map((item) => (
            <li key={item.id}>
              <span>{item.name} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <p className="checkout-total">
          Total: <strong>${cartTotal.toFixed(2)}</strong>
        </p>
      </div>
      <div className="checkout-message">
        <p>Thank you for your order! This is a demo — no payment is processed.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default CheckoutPage;
