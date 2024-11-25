// src/components/Navbar.js
import React from "react";
import "./NavigationTop.css";
import { FaShoppingCart } from "react-icons/fa";

const NavigationTop = () => {
  return (
    <div className="navbarTop">
      <div className="navbar-logo">
        <img
          src="https://via.placeholder.com/100x40.png?text=Logo"
          alt="Logo"
        />
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search for products, brands and more" />
        <button>Search</button>
      </div>
      <div className="navbar-icons">
        <button className="cart-button">
          <FaShoppingCart size={20} />
          Cart
        </button>
        <button className="login-button">Login</button>
      </div>
      {/* <div className="divider"></div> */}
    </div>
  );
};

export default NavigationTop;
