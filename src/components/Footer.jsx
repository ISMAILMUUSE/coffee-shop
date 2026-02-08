function Footer() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Eastleigh+6th+Street+Nairobi+Kenya";

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-location">
          <strong>6th Street, Eastleigh · Nairobi, Kenya</strong>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="footer-map-link">
            View on map
          </a>
        </div>
        <p className="footer-copy">© 2026 Coffee Shop</p>
      </div>
    </footer>
  );
}

export default Footer;
