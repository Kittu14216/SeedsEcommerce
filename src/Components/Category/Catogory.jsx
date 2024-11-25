import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Catogory.css";
import api from "../../api"; // Axios instance

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching categories...");

    // Fetch categories using Axios
    api
      .get("/categories/")
      .then((response) => {
        setCategories(response.data);
        console.log("Fetched categories:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error fetching categories: {error.message}</div>;
  }

  return (
    <div className="category-container">
      <h2>Categories</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-box">
            <img
              src={`http://localhost:8000${category.categoryimage}`} // Ensure the full URL is correct
              alt={category.name}
              className="category-image"
              onError={(e) => {
                console.error(
                  `Failed to load image: ${category.categoryimage}`
                );
                e.target.src = "/path/to/placeholder-image.jpg"; // Optional: Fallback image
              }}
            />
            <h3>{category.name}</h3>
            <Link
              to={`/products/${category.slug}`}
              className="view-category-button"
            >
              View Products
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
