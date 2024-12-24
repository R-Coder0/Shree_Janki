import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-left">
          <span>
          Plot No. 26, Pocket-9, Sector-25, Rohini, Delhi- 110085
          </span>
        </div>
        <div className="top-bar-right">
          <i className="fas fa-mobile-alt contact-icon"></i>
          <a href="tel:+919540991011" className="contact-link">
            +91 9540-991-011
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
