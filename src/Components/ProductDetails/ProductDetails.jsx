import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.css";
import api from "../../.api"; // Axios instance

const ProductDetails = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    api
      .get(`/products/${slug}/`)
      .then((response) => {
        setProduct(response.data);
        if (response.data.category) {
          return api.get(`/products/?category=${response.data.category}`);
        }
        throw new Error("Category slug not found");
      })
      .then((response) => {
        setRelatedProducts(response.data.filter((p) => p.slug !== slug));
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setError(error);
      });
  }, [slug]);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (error) {
    return <div>Error fetching product: {error.message}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-main">
        <div className="product-image">
          <img
            src={`https://seedsbackend.onrender.com${product.image}`} // Updated image URL
            alt={product.name}
          />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="highlight">{product.description}</p>
          <p>
            <strong>Available Quantity:</strong> {product.quantity}
          </p>
          <p>
            <strong>Cost:</strong> ₹{product.cost}
          </p>
          <p>
            <strong>Botanical Name:</strong> {product.botanical_name}
          </p>
          <div className="quantity-selector">
            <button onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>+</button>
          </div>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
      <div className="product-extra-details">
        <h2>Additional Details</h2>
        <p>
          <strong>Variety:</strong> {product.variety}
        </p>
        <p>
          <strong>Fruit Color:</strong> {product.fruit_color}
        </p>
        <p>
          <strong>Life Cycle:</strong> {product.life_cycle}
        </p>
        <p>
          <strong>Taste:</strong> {product.taste}
        </p>
        <p>
          <strong>Germination Rate:</strong> {product.germination_rate}
        </p>
        <p>
          <strong>Days to Maturity:</strong> {product.days_to_maturity}
        </p>
        <p>
          <strong>Difficulty Level:</strong> {product.difficulty_level}
        </p>
        <p>
          <strong>Sunlight Requirement:</strong> {product.sunlight_requirement}
        </p>
        <p>
          <strong>Sowing:</strong> {product.sowing}
        </p>
        <p>
          <strong>Soil:</strong> {product.soil}
        </p>
        <p>
          <strong>Watering:</strong> {product.watering}
        </p>
      </div>
      <h2>Related Products</h2>
      <div className="related-products-grid">
        {relatedProducts.map((relatedProduct, index) => (
          <div key={index} className="related-product-card">
            <img
              src={`https://seedsbackend.onrender.com${relatedProduct.image}`} // Updated image URL
              alt={relatedProduct.name}
              className="related-product-image"
            />
            <h3>{relatedProduct.name}</h3>
            <p>₹{relatedProduct.cost}</p>
            <Link
              to={`/product-details/${relatedProduct.slug}`}
              className="view-product-button"
            >
              View Details
            </Link>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
