import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram color="#E4405F" size="2em" />
        </a>
        <a
          href="https://wa.me/yourwhatsappnumber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp color="#25D366" size="2em" />
        </a>
        <a
          href="mailto:yourmail@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope color="#D44638" size="2em" />
        </a>
        <a href="tel:yourphonenumber" target="_blank" rel="noopener noreferrer">
          <FaPhone color="#34B7F1" size="2em" />
        </a>
      </div>
      <div className="footer-nav">
        <div className="footer-section">
          <h3>Shop</h3>
          <Link to="/shop/chilli-seeds">Chilli Seeds</Link>
          <Link to="/shop/tomato-seeds">Tomato Seeds</Link>
        </div>
        <div className="footer-section">
          <h3>Info</h3>
          <Link to="/about">About Us</Link>
          <Link to="/faq">FAQs</Link>
          <Link to="/returns-policy">Returns Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/shipping-policy">
            Payment, Shipping and Delivery Policy
          </Link>
        </div>
        <div className="footer-section">
          <h3>Learn</h3>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
      <p className="footer-credit">
        © 2024 ChilliBlossom. Powered by Elementor Pro
      </p>
    </footer>
  );
};

export default Footer;
