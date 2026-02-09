import coffeeData from "../data/coffeeData";
import MenuItem from "../components/MenuItem";
import menuImage from "../assets/images/menu.png";

function MenuPage() {
  return (
    <main className="page menu-page">
      <div className="menu-page-banner">
        <img src={menuImage} alt="Menu" />
      </div>
      <h1>Our Menu</h1>
      <p className="page-subtitle">Choose your favorite coffee</p>
      <div className="menu-grid">
        {coffeeData.map((coffee) => (
          <MenuItem key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </main>
  );
}

export default MenuPage;
