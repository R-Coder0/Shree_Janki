import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaTimes } from "react-icons/fa"; // Import the close icon
import "./Enquiry.css";

const EnquiryForm = ({ service, closeForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      ...formData,
      serviceTitle: service.title, // Include the service title in the email
    };

    emailjs
      .send(
        "service_r494afl", // Your EmailJS service ID
        "template_1ymdsmr", // Your EmailJS template ID
        emailData,
        "z__eP_tKiZ2jPBYMO" // Your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          closeForm();
        },
        (error) => {
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div className="enquiry-form-overlay">
      <div className="enquiry-form-container">
        <FaTimes className="close-icon" onClick={closeForm} />
        <h2>Enquire about {service.title}</h2> {/* Access service.title */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
