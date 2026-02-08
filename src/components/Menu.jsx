import coffeeData from "../data/coffeeData";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <section>
      <h2>Our Menu</h2>

      {coffeeData.map((coffee) => (
        <MenuItem
          key={coffee.id}
          name={coffee.name}
          price={coffee.price}
          description={coffee.description}
        />
      ))}
    </section>
  );
}

export default Menu;
