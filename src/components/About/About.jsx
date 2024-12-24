import React from "react";
import CountUp from "react-countup";
import "./About.css";
import slideImage from "../../assets/Herosection/about.webp";
import storyImage from "../../assets/storyimage.jpg";
import missionIcon from "../../assets/missionIcon.png";
import visionIcon from "../../assets/vissionIcon.png";
import profile from "../../assets/profile.jpg";
import approach from "../../assets/Gallery/approach.webp";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="header" style={{ backgroundImage: `url(${slideImage})` }}>
        <div className="overlay">
          <div className="header-content">
            <h1>About Us</h1>
            <p>Creating Memorable Experiences Through Expertise and Passion</p>
          </div>
        </div>
      </div>
      <div className="content">
        <section className="story-section">
          <div className="story-image">
            <img src={storyImage} alt="Story" />
          </div>
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              <strong>Shree Janki Tent & Decorators</strong> was established in 2015 under the name of our respected ancestor, Late Shri Janki Prasad Gupta. The company started with very small capital by Mr. Rahul Gupta and Rohit Gupta. Through hard work and perseverance, we have built a complete inventory of tents in our in-house storeroom. 
              In the span of ten years, we have grown to not only provide tent and event services but also offer event furniture on rent and collaborate with all related vendors. 
            </p>
            <p>
              After a satisfying success in our primary venture, we expanded into the field of pure vegetarian catering services under the name of <strong>Green Caterers</strong>. Our team comprises young, creative, and professional individuals who have a singular objective: to create events that are unique and successful. 
              Our motive is to build a relationship with our clients that goes beyond events.
            </p>
            <div className="sub-points">
              <div className="sub-point">
                <img src={missionIcon} alt="Mission Icon" />
                <div>
                  <h3>Our Mission</h3>
                  <p>
                    To deliver exceptional event solutions that exceed client expectations and create cherished memories.
                  </p>
                </div>
              </div>
              <div className="sub-point">
                <img src={visionIcon} alt="Vision Icon" />
                <div>
                  <h3>Our Vision</h3>
                  <p>
                    To be the leading provider of event services, known for our creativity, reliability, and commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="statistics">
          <div className="stat">
            <CountUp start={0} end={300} duration={3} />+
            <h3>Satisfied Clients</h3>
          </div>
          <div className="stat">
            <CountUp start={0} end={500} duration={3} />+
            <h3>Events Organized</h3>
          </div>
          <div className="stat">
            <CountUp start={0} end={20} duration={3} />+
            <h3>Years of Experience</h3>
          </div>
          <div className="stat">
            <CountUp start={0} end={80} duration={3} />+
            <h3>Industry Experts</h3>
          </div>
        </section>
        <section className="team">
          <h2 style={{fontSize:'2rem'}}>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={profile} alt="Team Member" />
              <h3>Name: Rahul Gupta</h3>
              <p>Role: Founder</p>
              <p>
                Background: Rahul Gupta, with over a decade of experience in event management, founded the company with a passion for creating memorable events. His business acumen and dedication to quality have driven the company's growth and success.
              </p>
            </div>
          </div>
        </section>
        <section className="approach-section">
          <div className="approach-content">
            <h2>Our Approach</h2>
            <blockquote>
              "Your event's success is our priority, and we achieve it through innovation and unwavering commitment."
            </blockquote>
            <div className="highlight">
              <p>
                We prioritize client needs and tailor our services accordingly.
              </p>
              <p>
                We embrace creative solutions for unique and memorable events.
              </p>
              <p>
                We are dedicated to delivering excellence in every detail.
              </p>
            </div>
            <p>
              At Shree Janki Tent, our approach centers on personalized service, ensuring every client receives the attention and expertise they deserve. We strive to create value through dedicated service and innovative solutions, transforming the event planning experience for our clients.
            </p>
          </div>
          <div className="approach-image">
            <img src={approach} alt="Approach" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;