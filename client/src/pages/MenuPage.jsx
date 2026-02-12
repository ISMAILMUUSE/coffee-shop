import { useState, useMemo } from "react";
import coffeeData from "../data/coffeeData";
import MenuItem from "../components/MenuItem";
import espressoHero from "../assets/images/espresso.jpg";
import latteHero from "../assets/images/latte.jpg";
import affogatoHero from "../assets/images/frappe.webp";
import cortadoHero from "../assets/images/cortado.png";

const CATEGORIES = [
  { id: "all", label: "All drinks", icon: "📋" },
  { id: "coffee", label: "Coffee", icon: "☕" },
  { id: "juice", label: "Juice", icon: "🧃" },
   { id: "food", label: "food", icon: "🍵" },
   
];

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCoffee = useMemo(() => {
    if (activeCategory === "all") return coffeeData;

    if (activeCategory === "juice") {
      return coffeeData.filter((item) => item.category === "juice");
    }

    if (activeCategory === "coffee") {
      return coffeeData.filter((item) => item.category !== "juice");
    }

    return coffeeData;
  }, [activeCategory]);

  return (
    <main className="page menu-page">
      {/* Hero section */}
      <section className="menu-hero">
        <div className="menu-hero-grid">
          <img src={espressoHero} alt="Rich espresso shot" />
          <img src={latteHero} alt="Latte art in a warm mug" />
          <img src={affogatoHero} alt="Iced coffee and indulgent affogato" />
          <img src={cortadoHero} alt="Fresh pastry and coffee moment" />
        </div>
        <div className="menu-hero-overlay" aria-hidden="true" />
        <div className="menu-hero-content">
          <h1 className="menu-hero-title">Our Menu</h1>
          <p className="menu-hero-subtitle">
            Handcrafted with love, served with care
          </p>
        </div>
      </section>

      {/* Category navigation */}
      <nav className="menu-category-nav">
        <div className="container menu-category-nav-inner">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              className={
                activeCategory === category.id
                  ? "menu-category-pill menu-category-pill--active"
                  : "menu-category-pill"
              }
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="menu-category-icon" aria-hidden="true">
                {category.icon}
              </span>
              <span className="menu-category-label">{category.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Menu items */}
      <section className="menu-section">
        <div className="container">
          <header className="menu-section-header">
            <h2 className="section-title">Drinks, just the way you like them</h2>
            <p className="section-lede">
              Explore our handcrafted drinks selection. From rich coffees to
              refreshing juices, every sip is made to highlight the best of its
              character.
            </p>
          </header>

          <div className="menu-grid">
            {filteredCoffee.map((coffee) => (
              <MenuItem key={coffee.id} coffee={coffee} />
            ))}
          </div>
        </div>
      </section>

      {/* Customization section */}
      <section className="menu-customization">
        <div className="container">
          <h2 className="section-title section-title--center">
            Make every cup yours
          </h2>
          <p className="section-lede section-lede--center">
            Customize your drink to match your taste, mood, and moment. Our
            baristas are happy to help you find your perfect balance and enjoy the food as well.
          </p>

          <div className="menu-customization-grid">
            <div className="menu-customization-card">
              <div className="menu-customization-icon">🥤</div>
              <h3>Sizes for every moment</h3>
              <p>
                Choose from piccolo, classic, or large cups for the perfect
                coffee ritual.
              </p>
            </div>

            <div className="menu-customization-card">
              <div className="menu-customization-icon">🥛</div>
              <h3>Milk, your way</h3>
              <p>
                Whole, skim, oat, almond, or soy – pick the milk that suits your
                lifestyle.
              </p>
            </div>

            <div className="menu-customization-card">
              <div className="menu-customization-icon">➕</div>
              <h3>Extra espresso shots</h3>
              <p>
                Add an extra shot (or two) for an energizing boost that keeps
                you going.
              </p>
            </div>

            <div className="menu-customization-card">
              <div className="menu-customization-icon">🍯</div>
              <h3>Flavor syrups</h3>
              <p>
                Vanilla, caramel, hazelnut and seasonal specials, lightly
                sweetened to perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dietary information */}
      <section className="menu-dietary">
        <div className="container">
          <div className="menu-dietary-panel">
            <h2 className="menu-dietary-title">Dietary & allergy friendly</h2>
            <p>
              We believe great coffee should be accessible to everyone. Many of
              our drinks can be made{" "}
              <strong>plant-based and dairy-free</strong> using our range of
              alternative milks.
            </p>
            <p>
              Gluten-free options are available for select food items in-store.
              Please let our team know if you have{" "}
              <strong>allergies or intolerances</strong> so we can guide you to
              the safest choices.
            </p>
            <p className="menu-dietary-note">
              While we do our best to avoid cross-contamination, all drinks are
              prepared in a shared environment.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="menu-cta">
        <div className="container menu-cta-inner">
          <h2 className="menu-cta-title">Ready for your next favorite cup?</h2>
          <p className="menu-cta-text">
            Order ahead, skip the line, and pick up your coffee freshly brewed
            when you arrive.
          </p>
          <div className="menu-cta-actions">
            <button type="button" className="btn menu-cta-primary">
              Order Online
            </button>
            <button type="button" className="btn btn-secondary menu-cta-secondary">
              View Locations
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MenuPage;
