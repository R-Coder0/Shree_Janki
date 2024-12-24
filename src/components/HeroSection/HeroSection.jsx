import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import EnquiryForm from '../Pages/Enquiry'; // Import the EnquiryForm component
import heroVideo from '../../assets/video/Hero.mp4'

const HeroSection = () => {
  const texts = [
    "Shree Janki Tent: Creating Unforgettable Moments.",
    "Your Trusted Partner for Exceptional Event Experiences.",
    "Turning Your Celebrations into Cherished Memories."
  ];

  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [textColor, setTextColor] = useState('#fff');
  const [isFormVisible, setIsFormVisible] = useState(false); // State to control form visibility

  useEffect(() => {
    let timer;
    if (isTyping) {
      timer = setTimeout(() => {
        handleTypewriter();
      }, 100);
    } else {
      timer = setTimeout(() => {
        handleBackspace();
      }, 50);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isTyping]);

  const handleTypewriter = () => {
    const fullText = texts[textIndex];
    if (charIndex < fullText.length) {
      const currentChar = fullText.charAt(charIndex);
      setCurrentText((prevText) => prevText + currentChar);
      setCharIndex((prevIndex) => prevIndex + 1);
      if (charIndex === 0 && texts[textIndex].charAt(charIndex) === ' ') {
        setTextColor('#73aa9f'); // Light green for the second line
      }
    } else {
      setIsTyping(false);
      setTimeout(() => {
        setIsTyping(true);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setCurrentText('');
        setCharIndex(0);
        setTextColor('#fff'); // Reset to white
      }, 2000);
    }
  };

  const handleBackspace = () => {
    if (charIndex > 0) {
      setCurrentText((prevText) => prevText.slice(0, -1));
      setCharIndex((prevIndex) => prevIndex - 1);
    } else {
      setIsTyping(true);
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }
  };

  const handleGetStartedClick = () => {
    setIsFormVisible(true); 
  };

  const closeForm = () => {
    setIsFormVisible(false); 
  };

  return (
    <div className="heroSection">
      <video className="heroVideo" autoPlay muted loop playsInline preload="auto">
        <source src={heroVideo}type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  );
};

export default HeroSection;
