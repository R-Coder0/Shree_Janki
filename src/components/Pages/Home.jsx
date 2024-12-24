import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../HeroSection/HeroSection';
import Testimonials from '../Testimonial/Testimonials';
import aboutiamge from '../../assets/Gallery/pic3.jpg'
import './Home.css';
import work1 from '../../assets/Gallery/pic12.jpg'
import work2 from '../../assets/Gallery/pic1.jpg'
import work3 from '../../assets/Gallery/pic2.jpg'
import work4 from '../../assets/Gallery/pic3.jpg'
import work5 from '../../assets/Gallery/pic4.jpg'
import work6 from '../../assets/Gallery/pic5.jpg'
import work7 from '../../assets/Gallery/pic7.jpg'
import work8 from '../../assets/Gallery/pic6.jpg'
import './Modal'
import ServiceCards from './ServiceCard';

const OurWork = () => {
  const works = [
    {
      image: work1
    },
    {
      image: work2 
    },
    {
      image: work3
    },
    {
      image: work4
    },
    {
      image: work5
    },
    {
      image: work6
    },
    {
      image: work7
    },
    {
      image: work8
    }
  ];

  return (
    <section className="our-work">
      <div className="container">
        <h2>Our Work</h2>
        <p className="work-description">
          We are specialised For Theme-Base Pattern event for evenry occassion. We have choice of every colours of fabric in Truss and Bengali Pattern work. We are Decorater of Haldi & Mehandi theme
        </p>
        <div className="work-grid">
          {works.map((work, index) => (
            <div key={index} className="work-item">
              <img src={work.image} alt={`Work ${index + 1}`} />
            </div>
          ))}
        </div>  
      </div>
    </section>
  );
};



// About Us Section
const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Shree Janki Tent & Decorater was Established in 2015 with thename of our Respected Grand Father Late. Shri Janki Prasad Gupta. <br />
            The company was founded with very small Capital by Mr. Rahul Gupta. After a loit of struggle and hard work we have built all Tent inventory in out in House Loaddown in the sapan of Ten years we are not only tent and events service provider but also provide tent and events furnitures on Rent to all related vendors.
            <br />After a Satifying success I added a new work of pure veg. catering services to my company Name of Gerg Cateres </p>
            
            <h3 style={{color:'#fff', fontSize:'2rem'}}>Our Mission</h3>
            <p>
              We are team of young Creative and professionals that all have only one objective to create events is a unique and successfull. Our mission is to provide exceptional event solutions that exceed our clients' expectations. Our motive is to build a Relation with our client that goes beyond events. We strive to create memorable experiences by offering customized services tailored to your specific needs, ensuring that every event we touch is a success.</p>
          </div>
          <div className="about-image">
            <img
              src={aboutiamge}
              alt="About Us"
              className="responsive-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Call to Action (CTA) Section
const CallToAction = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact'); // Change '/contact' to the actual path of your contact page
  };

  return (
    <section className="call-to-action">
      <div className="container">
        <h2>Ready to make your event a success?</h2>
        <button onClick={handleContactClick}>
          Contact Us
        </button>
      </div>
    </section>
  );
};


const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <OurWork />
      <CallToAction />
      <section className="service-preview">
        <h2
        style={{fontSize:"3rem"}}
        >Our Services</h2>
        <ServiceCards/> {/* Use the new service cards component */}
      </section>
      <Testimonials />
    </div>
  );
};

export default Home;
