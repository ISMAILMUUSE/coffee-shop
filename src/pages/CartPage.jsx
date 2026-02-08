import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { items, updateQuantity, removeFromCart, cartTotal, cartCount } =
    useCart();

  if (cartCount === 0) {
    return (
      <main className="page cart-page">
        <h1>Your Cart</h1>
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <Link to="/menu" className="btn btn-primary">
            Browse Menu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page cart-page">
      <h1>Your Cart</h1>
      <div className="cart-list">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-img" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p className="cart-item-price">${item.price.toFixed(2)} each</p>
              <div className="cart-item-actions">
                <button
                  type="button"
                  className="btn-qty"
                  onClick={() => updateQuantity(item.id, -1)}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="cart-item-qty">{item.quantity}</span>
                <button
                  type="button"
                  className="btn-qty"
                  onClick={() => updateQuantity(item.id, 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
                <button
                  type="button"
                  className="btn-remove"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove from cart"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="cart-item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <p className="cart-total">
          Total: <strong>${cartTotal.toFixed(2)}</strong>
        </p>
        <Link to="/checkout" className="btn btn-primary">
          Proceed to Checkout
        </Link>
      </div>
    </main>
  );
}

export default CartPage;
