import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page section">
      <div className="error-container">
        <h1>Page is not available</h1>
        <Link to="/" className="btn btn-primary">
          home page
        </Link>
      </div>
    </div>
  );
};

export default Error;
