function Location() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Eastleigh+6th+Street+Nairobi+Kenya";

  return (
    <section className="location-section" id="location">
      <div className="location-glow" aria-hidden="true" />
      <div className="location-content">
        <span className="location-badge">📍 Find us</span>
        <h2 className="location-title">
          Eastleigh 6th Street
          <span className="location-city">Nairobi</span>
        </h2>
        <p className="location-tagline">
          Where the city wakes up. Right in the heart of Eastleigh — busy, bold, and full of flavour.
        </p>
        <address className="location-address">
          <strong>6th Street, Eastleigh</strong>
          <br />
          Nairobi, Kenya
        </address>
        <div className="location-meta">
          <span className="location-hours">Open daily · 6:00 AM – 10:00 PM</span>
        </div>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="location-cta"
        >
          Get directions →
        </a>
      </div>
    </section>
  );
}

export default Location;
