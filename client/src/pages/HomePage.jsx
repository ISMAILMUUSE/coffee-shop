import { Link } from "react-router-dom";
import heroImage from "../assets/images/coffehomeoage.jpg";

function HomePage() {
  return (
    <main className="home-page">
      <section className="hero hero-fullpage">
        <img src={heroImage} alt="Coffee shop" className="hero-bg-image" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <h1>Welcome to Coffee Shop</h1>
          <p>Fresh coffee, crafted with care. Explore our menu and find your favorite.</p>
          <Link to="/menu" className="btn btn-primary">
            View Menu
          </Link>
        </div>
      </section>
      <section className="features page">
        <div className="feature-card">
          <span className="feature-icon">☕</span>
          <h3>Quality Beans</h3>
          <p>We source the finest beans for every cup.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🌱</span>
          <h3>Fresh Daily</h3>
          <p>Brewed fresh every day for the best taste.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">❤️</span>
          <h3>Made with Love</h3>
          <p>Every order is prepared with care.</p>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
