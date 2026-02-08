import { useCart } from "../context/CartContext";

function MenuItem({ coffee }) {
  const { addToCart } = useCart();
  const { id, name, price, description, image } = coffee;

  const handleAddToCart = () => {
    addToCart(coffee, 1);
  };

  return (
    <div className="menu-card">
      <img src={image} alt={name} />
      <div className="menu-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="menu-card-footer">
          <strong>${price.toFixed(2)}</strong>
          <button
            type="button"
            className="btn btn-add"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
