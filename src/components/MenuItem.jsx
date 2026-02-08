function MenuItem({ name, price, description }) {
  return (
    <div className="menu-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <strong>${price}</strong>
    </div>
  );
}

export default MenuItem;
