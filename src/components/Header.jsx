import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cartCount } = useCart();

  return (
    <header className="site-header">
      <Link to="/" className="logo">
        <span className="logo-icon">☕</span>
        <span>Coffee Shop</span>
      </Link>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart" className="nav-cart">
          Cart
          {cartCount > 0 && (
            <span className="cart-badge" aria-label={`${cartCount} items in cart`}>
              {cartCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
