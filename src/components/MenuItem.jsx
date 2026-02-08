function MenuItem({ name, price, description, image }) {
  return (
    <div className="menu-card">
      <img src={image} alt={name} />
      <div className="menu-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <strong>${price}</strong>
      </div>
    </div>
  );
}

export default MenuItem;
