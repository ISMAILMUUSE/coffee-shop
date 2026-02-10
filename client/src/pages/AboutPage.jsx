import { Link } from "react-router-dom";

import aboutHeroImage from "../assets/images/about3.webp";
import aboutStoryImage from "../assets/images/about1.jpg";
import aboutTeamImage from "../assets/images/about2.jpg";

function AboutPage() {
  return (
    <main className="page about-page">
      {/* 1) Hero */}
      <header className="about-hero">
        <img
          className="about-hero-bg"
          src={aboutHeroImage}
          alt="Cozy coffee shop interior"
          loading="eager"
        />
        <div className="about-hero-overlay" aria-hidden="true" />
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-subtitle">
            Crafting exceptional coffee experiences since 2015
          </p>
        </div>
      </header>

      {/* 2) Our Story */}
      <section className="about-section about-story" aria-labelledby="our-story">
        <div className="container about-story-grid">
          <div className="about-story-text">
            <h2 id="our-story" className="section-title">
              Our Story
            </h2>
            <p>
              What began as a small passion project in a neighborhood garage has
              blossomed into a beloved community gathering space. Our founders
              started roasting beans in small batches, driven by a simple
              belief: great coffee should be accessible to everyone.
            </p>
            <p>
              Today, we source our beans directly from sustainable farms around
              the world, roast them in-house, and serve them with care. Every
              cup tells a story of dedication, craftsmanship, and community.
            </p>
            <p>
              We’re more than just a coffee shop — we’re a place where
              friendships are formed, ideas are born, and memories are made, one
              cup at a time.
            </p>
          </div>

          <div className="about-story-media">
            <img
              src={aboutStoryImage}
              alt="Coffee beans roasting in small batches"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 3) Our Values */}
      <section
        className="about-section about-values"
        aria-labelledby="our-values"
      >
        <div className="container">
          <h2 id="our-values" className="section-title section-title--center">
            Our Values
          </h2>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon" aria-hidden="true">
                ★
              </div>
              <h3 className="value-title">Quality First</h3>
              <p className="value-desc">Focus on premium beans and perfect brewing</p>
            </div>

            <div className="value-card">
              <div className="value-icon" aria-hidden="true">
                ♻
              </div>
              <h3 className="value-title">Sustainability</h3>
              <p className="value-desc">
                Ethical sourcing and eco-friendly practices
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon" aria-hidden="true">
                ☕
              </div>
              <h3 className="value-title">Community</h3>
              <p className="value-desc">A welcoming space for people to connect</p>
            </div>

            <div className="value-card">
              <div className="value-icon" aria-hidden="true">
                ♥
              </div>
              <h3 className="value-title">Passion</h3>
              <p className="value-desc">Love and dedication in every cup</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4) Meet the Team */}
      {/* <section className="about-section about-team" aria-labelledby="meet-team">
        <div className="container">
          <h2 id="meet-team" className="section-title section-title--center">
            Meet the Team
          </h2>
          <p className="section-lede section-lede--center">
            The people behind the roasts, the routines, and the warm welcome.
          </p>

          <div className="team-grid">
            <article className="team-card">
              <div className="team-avatar">
                <img
                  src={aboutTeamImage}
                  alt="Maria Santos"
                  loading="lazy"
                  style={{ objectPosition: "50% 35%" }}
                />
              </div>
              <h3 className="team-name">Bushro Abdi</h3>
              <p className="team-role">Co-Founder &amp; Head Roaster</p>
              <p className="team-bio">
                With over 15 years of experience, Maria oversees our roasting
                process and bean sourcing.
              </p>
            </article>

            <article className="team-card">
              <div className="team-avatar">
                <img
                  src={aboutTeamImage}
                  alt="James Chen"
                  loading="lazy"
                  style={{ objectPosition: "50% 50%" }}
                />
              </div>
              <h3 className="team-name"> Abduallahi Ahmed </h3>
              <p className="team-role">Co-Founder &amp; Operations</p>
              <p className="team-bio">
                James ensures every customer has an exceptional experience from
                the moment they walk in.
              </p>
            </article>

            <article className="team-card">
              <div className="team-avatar">
                <img
                  src={aboutTeamImage}
                  alt="Alex Rodriguez"
                  loading="lazy"
                  style={{ objectPosition: "50% 65%" }}
                />
              </div>
              <h3 className="team-name">Guuhaad Farah</h3>
              <p className="team-role">Lead Barista</p>
              <p className="team-bio">
                Award-winning barista with a passion for latte art and creating
                new signature drinks.
              </p>
            </article>
          </div>
        </div>
      </section> */}

      {/* 5) Call to Action */}
      <section className="about-cta" aria-labelledby="visit-us">
        <div className="container about-cta-inner">
          <h2 id="visit-us" className="about-cta-title">
            Visit Us Today
          </h2>
          <p className="about-cta-text">
            Experience the difference that passion and quality make. We're open
            daily from 7 AM to 8 PM.
          </p>
          <div className="about-cta-actions">
            <Link className="btn btn-primary about-cta-primary" to="/contact">
              Find Our Location
            </Link>
            <Link className="btn btn-secondary about-cta-secondary" to="/menu">
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
