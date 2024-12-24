import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Shree Janki Tent</h3>
              <p>Your trusted partner in event planning and tent rentals. We offer top-quality services to make your events unforgettable, providing everything from elegant tents to comprehensive event management.</p>
            </div>
            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li><Link to="/services">Tent Rentals</Link></li>
                <li><Link to="/services">Event Planning</Link></li>
                <li><Link to="/services">Catering Services</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Navigation</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p><a href="mailto:info@shreejankitent.com">info@shreejankitent.com</a></p>
              <p><a href="tel:+919990679090">+91 9990-679-090</a></p>
              <p>First Floor, D-14/240, Sector -7, Rohini, Delhi - 110085</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-grid">
            <p>&copy; {new Date().getFullYear()} Shree Janki Tent | All rights reserved. Powered by <strong>BUSSINESSKARO.COM</strong></p>
            <div className="social-icons">
              <a href="/" className='FB'><FaFacebook /></a>
              <a href="https://www.instagram.com/shreejankitent_rohini/?hl=en" className='IG'><FaInstagram /></a>
              <a href="mailto:info@shreejankitent.com" className='YT'><FaEnvelope /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
