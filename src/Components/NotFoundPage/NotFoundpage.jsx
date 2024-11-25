import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-container">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>We can't seem to find the page you're looking for.</p>
        <Link to="/" className="home-button">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
