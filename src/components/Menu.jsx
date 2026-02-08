import coffeeData from "../data/coffeeData";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <section>
      <h2>Our Menu</h2>

      <div className="menu-grid">
        {coffeeData.map((coffee) => (
          <MenuItem
            key={coffee.id}
            name={coffee.name}
            price={coffee.price}
            description={coffee.description}
            image={coffee.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;
