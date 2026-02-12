import { use } from "react";
import { useCart } from "../context/CartContext";

function MenuItem({ coffee }) {
  const { addToCart } = useCart();
  const { id, name, price, description, composition, characteristics, serving, taste, benefits, flavorprofile, healthnotes,  uses,  image } = coffee;

  const handleAddToCart = () => {
    addToCart(coffee, 1);
  };

  return (
    <div className="menu-card">
      <img src={image} alt={name} />
      <div className="menu-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{benefits}</p>
        <p>{flavorprofile}</p>
        <p>{healthnotes}</p>
        <p>{uses}</p>
        <p><strong>Composition:</strong> {composition}</p>
        <p><strong>Characteristics:</strong> {characteristics}</p>
        <p><strong>Serving:</strong> {serving}</p>
        <p><strong>Taste:</strong> {taste}</p>

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
