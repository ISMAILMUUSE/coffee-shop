import contactHeroImage from "../assets/images/contactphoto.jpg";

function ContactPage() {
  return (
    <main className="page contact-page">
      {/* Hero */}
      <header className="contact-hero">
        <img
          src={contactHeroImage}
          alt="Warm and modern coffee shop interior"
          className="contact-hero-bg"
          loading="eager"
        />
        <div className="contact-hero-overlay" aria-hidden="true" />
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Get in Touch</h1>
          <p className="contact-hero-subtitle">
            We’re here for your questions, feedback, and coffee moments.
          </p>
        </div>
      </header>

      {/* Main contact info + lifestyle image */}
      <section
        className="contact-section contact-main"
        aria-labelledby="contact-info-heading"
      >
        <div className="container contact-main-grid">
          <div>
            <h2 id="contact-info-heading" className="section-title">
              Visit, call, or write to us
            </h2>
            <p className="section-lede">
              Whether you’re planning a meetup, curious about our menu, or just
              want to say hello, we’d love to hear from you.
            </p>

            <div className="contact-info-grid">
              <div className="contact-info-card">
                <div className="contact-icon-badge">
                  <span className="contact-icon-text">LOC</span>
                </div>
                <div>
                  <h3>Location</h3>
                  <p>
                    <strong>Nairobi Eastlight, 6th Street</strong>
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon-badge">
                  <span className="contact-icon-text">TEL</span>
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>+254 726 088 998</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon-badge">
                  <span className="contact-icon-text">MAIL</span>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>hello@coffeeshop.ke</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon-badge">
                  <span className="contact-icon-text">HRS</span>
                </div>
                <div>
                  <h3>Opening Hours</h3>
                  <p>
                    Daily: <strong>7:00 AM – 8:00 PM</strong>
                    <br />
                    Weekend brunch from 9:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="contact-lifestyle">
            <div className="contact-lifestyle-card">
              <img
                src={contactHeroImage}
                alt="Coffee cup beside a notebook in a cozy café"
                loading="lazy"
              />
              <div className="contact-lifestyle-text">
                <h3>Work, meet, or unwind</h3>
                <p>
                  Bring your laptop, a good book, or your favorite people — our
                  café is designed for slow mornings and inspired afternoons.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Contact form */}
      <section
        className="contact-section contact-form-section"
        aria-labelledby="contact-form-heading"
      >
        <div className="container contact-form-card">
          <div className="contact-form-copy">
            <h2 id="contact-form-heading" className="section-title">
              Send us a message
            </h2>
            <p className="section-lede">
              Tell us how we can help — we usually reply within one business
              day.
            </p>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-form-row">
              <div className="contact-form-field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="contact-form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="contact-form-field">
              <label htmlFor="topic">Topic</label>
              <select id="topic" name="topic" defaultValue="general">
                <option value="general">General question</option>
                <option value="events">Group booking / event</option>
                <option value="feedback">Feedback about your visit</option>
                <option value="partnerships">Partnerships &amp; wholesale</option>
              </select>
            </div>

            <div className="contact-form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Share any details that will help us assist you."
                required
              />
            </div>

            <div className="contact-form-actions">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map placeholder */}
      <section
        className="contact-section contact-map-section"
        aria-labelledby="contact-map-heading"
      >
        <div className="container">
          <h2 id="contact-map-heading" className="section-title">
            Find us on the map
          </h2>
          <p className="section-lede">
            We’re tucked right in the heart of Nairobi Eastlight — easy to find,
            and even easier to stay a while.
          </p>
          <div className="contact-map-placeholder" aria-hidden="true">
            <div className="contact-map-grid">
              <div className="contact-map-block contact-map-block--primary" />
              <div className="contact-map-block" />
              <div className="contact-map-block" />
              <div className="contact-map-block" />
            </div>
            <span className="contact-map-label">Map placeholder</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="contact-section contact-faq-section"
        aria-labelledby="contact-faq-heading"
      >
        <div className="container">
          <h2 id="contact-faq-heading" className="section-title section-title--center">
            Frequently Asked Questions
          </h2>
          <p className="section-lede section-lede--center">
            A few quick answers to help you plan your visit.
          </p>

          <div className="contact-faq-grid">
            <article className="contact-faq-item">
              <h3>Do you offer Wi‑Fi?</h3>
              <p>
                Yes. We provide fast, free Wi‑Fi so you can work, study, or
                browse comfortably while you enjoy your coffee.
              </p>
            </article>

            <article className="contact-faq-item">
              <h3>Can I reserve a table?</h3>
              <p>
                For groups of 6 or more, you can reach out via the form above or
                call us to reserve a table or corner for your meetup.
              </p>
            </article>

            <article className="contact-faq-item">
              <h3>Do you have dairy‑free options?</h3>
              <p>
                Absolutely. We offer oat, almond, and soy milk alternatives, as
                well as a selection of plant‑based pastries.
              </p>
            </article>

            <article className="contact-faq-item">
              <h3>Can I host an event at your café?</h3>
              <p>
                Yes. We host small private events and coffee tastings. Share the
                details through the form, and we’ll get back to you with options.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
