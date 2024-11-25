import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeaderCarousel.css";
import api from "../../api"; // Axios instance

const HeaderCarousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    api
      .get("/header-carousel-images/")
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching carousel images:", error);
      });

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carouselContainer">
      <div className="carousel">
        <button className="carousel-button left" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentIndex ? "current" : ""
              }`}
            >
              <div className="carousel-content">
                <div className="carousel-image">
                  <img
                    src={`https://seedsbackend.onrender.com${image.headerimage}`} // Ensure the full URL is correct
                    alt={image.alt_text}
                  />
                  <Link to="/categories" className="view-products-button">
                    View Our Products
                  </Link>
                </div>
                <div className="carousel-text">
                  <h2>{image.caption}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button right" onClick={nextSlide}>
          &#10095;
        </button>
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "current" : ""}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderCarousel;
