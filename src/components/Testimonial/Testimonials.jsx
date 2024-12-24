import React from 'react';
import './Testimonial.css'; // Ensure CSS path is correct
import review1 from '../../assets/profile.jpg';

const Testimonials = () => {
  const testimonialData = [
    {
      image: review1,
      feedback: "I was thoroughly impressed with the level of service provided. The team handled everything with such care, and the results exceeded my expectations. I will definitely be using them again!",
      name: "Aman Verma",
      role: "Homebuyer, New Delhi",
    },
    {
      image: review1,
      feedback: "Fantastic support throughout the entire process. The team was always available to answer my questions and made me feel valued. They truly went above and beyond to ensure my satisfaction!",
      name: "Ritika Jain",
      role: "Property Investor, Mumbai",
    },
    {
      image: review1,
      feedback: "The service was outstanding! From start to finish, every detail was taken care of. I couldn't have asked for a better experience, and I highly recommend this team to anyone looking for quality service!",
      name: "Nikhil Mehta",
      role: "Commercial Client, Bangalore",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="testimonials-page">
      <h1 className="testimonials-title">What Our Clients Say</h1>
      <div className="testimonials-grid">
        {testimonialData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div
              className="testimonial-image"
              style={{ backgroundImage: `url(${testimonial.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            <div className="testimonial-content">
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <h3 className="testimonial-name">- {testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
