import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="page not-found-page">
      <h1>404</h1>
      <p>This page doesn't exist.</p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </main>
  );
}

export default NotFoundPage;
