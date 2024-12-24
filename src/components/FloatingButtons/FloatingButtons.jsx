import React from "react";
import "./FloatingButtons.css";

const FloatingButtons = () => {
  return (
    <>
      <a href="tel:+919990679090" className="floating-button call-button">
        <i className="fas fa-phone"></i>
      </a>
      <a href="https://wa.me/+919990679090" className="floating-button whatsapp-button" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
};

export default FloatingButtons;
