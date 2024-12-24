import React, { useState } from 'react';
import './Contact.css';
import contactImage from '../../assets/Herosection/contact.webp';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send("service_r494afl", "template_1ymdsmr", formData, "z__eP_tKiZ2jPBYMO")
      .then((response) => {
        setStatus('Email sent successfully.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      })
      .catch((error) => {
        setStatus('Something went wrong. Please try again.');
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-header" style={{ backgroundImage: `url(${contactImage})` }}>
        <div className="header-overlay">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Let's discuss how we can make your event unforgettable.</p>
        </div>
      </div>
      <div className="contact-content">
        <div className="contact-form-section">
          <h2>Get in Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
          {status && <p className="form-status">{status}</p>}
        </div>
        <div className="contact-details">
          <h2>Contact Details</h2>
          <p><strong>Address:</strong> First Floor, D-14/240, Sector -7, Rohini, Delhi - 110085</p>
          <p><strong>Phone:</strong> <a href="tel:+919990679090">+91 9990-679-090</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@shreejankitent.com">info@shreejankitent.com</a></p>
          <div className="social-media">
            <h3>Follow Us</h3>
            <a href="https://www.facebook.com/profile.php?id=61563111953210" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/shree_jankitentandgargcaterers/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.youtube.com/@RahulGupta-ih4bc" target="_blank" rel="noopener noreferrer">Youtube</a>
          </div>
        </div>
      </div>
      <div className="map-section">
        <h2>Our Location</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9545291629533!2d77.08636817550295!3d28.69100677563279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d058433dfd35b%3A0x2416eaf1348a8c23!2sshree_%20janki%20tent%20%26%20Garg%20caterers!5e0!3m2!1sen!2sin!4v1725529415658!5m2!1sen!2sin"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
