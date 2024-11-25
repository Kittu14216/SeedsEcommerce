import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Products.css";
import api from "../../api";

const Products = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products based on category slug
    api
      .get(`/products/?category=${slug}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError(error);
      });
  }, [slug]);

  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }

  return (
    <div className="products-container">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <Link
            to={`/product-details/${product.slug}`}
            key={index}
            className="product-card"
          >
            <div className="product-box">
              <img
                src={`http://localhost:8000${product.image}`} // Adjusted path for the image
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>₹{product.cost}</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
