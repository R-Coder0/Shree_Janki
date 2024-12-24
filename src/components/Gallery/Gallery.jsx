import React, { useState } from "react";
import "./Gallery.css";
import clientImage1 from "../../assets/Gallery/pic1.jpg";
import clientImage2 from "../../assets/Gallery/pic2.jpg";
import clientImage3 from "../../assets/Gallery/pic3.jpg";
import clientImage4 from "../../assets/Gallery/pic4.jpg";
import clientImage5 from "../../assets/Gallery/pic5.jpg";
import clientImage6 from "../../assets/Gallery/pic6.jpg";
import clientImage7 from "../../assets/Gallery/pic7.jpg";
import clientImage8 from "../../assets/Gallery/pic8.jpg";
import clientImage9 from "../../assets/Gallery/pic9.jpg";
import clientImage10 from "../../assets/Gallery/pic10.jpg";
import clientImage11 from "../../assets/Gallery/pic11.jpg";
import clientImage12 from "../../assets/Gallery/pic12.jpg";
import clientImage13 from "../../assets/Gallery/pic13.jpg";
import clientVideo1 from "../../assets/Gallery/video1.mp4";
import clientVideo2 from "../../assets/Gallery/video2.mp4";
import clientVideo3 from "../../assets/Gallery/video3.mp4";
import clientVideo4 from "../../assets/Gallery/video4.mp4";
import clientVideo5 from "../../assets/Gallery/video5.mp4";
import clientVideo6 from "../../assets/Gallery/video6.mp4";
import clientVideo7 from "../../assets/Gallery/video7.mp4";
import clientVideo8 from "../../assets/Gallery/video8.mp4";
import clientVideo9 from "../../assets/Gallery/video9.mp4";
import clientVideo10 from "../../assets/Gallery/video10.mp4";
import clientVideo11 from "../../assets/Gallery/video11.mp4";
import clientVideo12 from "../../assets/Gallery/video12.mp4";
import clientVideo13 from "../../assets/Gallery/video13.mp4";
import clientVideo14 from "../../assets/Gallery/video14.mp4";
import clientVideo15 from "../../assets/Gallery/video15.mp4";
import clientVideo16 from "../../assets/Gallery/video16.mp4";
import clientVideo17 from "../../assets/Gallery/video17.mp4";
import clientVideo18 from "../../assets/Gallery/video18.mp4";
import clientVideo19 from "../../assets/Gallery/video19.mp4";
import clientVideo20 from "../../assets/Gallery/video20.mp4";
import clientVideo21 from "../../assets/Gallery/video21.mp4";
import clientVideo22 from "../../assets/Gallery/video22.mp4";
import reviews from "../../assets/profile.jpg";

const testimonials = [
  {
    name: "Aman Verma",
    feedback:
      "Vaani Properties helped me find my dream home effortlessly. Their team was knowledgeable, patient, and attentive to my needs.",
    image: reviews,
  },
  {
    name: "Ritika Jain",
    feedback:
      "The best real estate experience I've had! Vaani Properties provided excellent service and guided me through the entire process with ease.",
    image: reviews,
  },
  {
    name: "Nikhil Mehta",
    feedback:
      "I was impressed by their professionalism and commitment. Vaani Properties made buying a commercial property a smooth experience.",
    image: reviews,
  },
  {
    feedback:
      "Their property management services are top-notch. I feel secure knowing my property is in good hands with Vaani Properties.",
    name: "Priya Singh",
    image: reviews,
  },
  {
    feedback:
      "Outstanding service and great communication throughout. I highly recommend Vaani Properties to anyone looking to buy or rent.",
    name: "Karan Sharma",
    image: reviews,
  },
];

const GallerySection = ({ title, mediaItems }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextMedia = () => {
    setCurrentIndex((currentIndex + 1) % mediaItems.length);
  };

  const prevMedia = () => {
    setCurrentIndex((currentIndex + mediaItems.length - 1) % mediaItems.length);
  };

  return (
    <div className="gallery-section">
      <h2 style={{ fontSize: "2.5rem", marginBottom: "0px" }}>{title}</h2>
      <div className="media-grid">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="media-card"
            onClick={() => openModal(index)}
          >
            {item.type === "image" ? (
              <img src={item.url} alt={item.alt} />
            ) : (
              <video src={item.url} alt={item.alt} />
            )}
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="gallery-modal-backdrop">
          <div className="gallery-modal-content">
            <button onClick={closeModal} className="gallery-modal-close-btn">
              ✖
            </button>
            <button
              onClick={prevMedia}
              className="gallery-modal-nav-btn-prevbtn"
            >
              〈
            </button>
            {mediaItems[currentIndex].type === "image" ? (
              <img
                src={mediaItems[currentIndex].url}
                alt={mediaItems[currentIndex].alt}
                className="gallery-modal-image"
              />
            ) : (
              <video
                src={mediaItems[currentIndex].url}
                controls
                className="gallery-modal-video"
              />
            )}
            <button
              onClick={nextMedia}
              className="gallery-modal-nav-btn-nextbtn"
            >
              〉
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const GalleryHero = () => {
  const mediaItems = [
    { url: clientVideo15, alt: "Video 1", type: "video" },
    { url: clientImage1, alt: "Reception Image 1", type: "image" },
    { url: clientImage2, alt: "Reception Image 2", type: "image" },
    { url: clientImage3, alt: "Reception Image 3", type: "image" },
    { url: clientImage4, alt: "Reception Image 4", type: "image" },
    { url: clientImage5, alt: "Reception Image 5", type: "image" },
    { url: clientImage6, alt: "Reception Image 6", type: "image" },
    { url: clientImage7, alt: "Reception Image 7", type: "image" },
    { url: clientImage8, alt: "Reception Image 8", type: "image" },
    { url: clientImage9, alt: "Reception Image 9", type: "image" },
    { url: clientImage10, alt: "Reception Image 10", type: "image" },
    { url: clientImage11, alt: "Reception Image 11", type: "image" },
    { url: clientImage12, alt: "Reception Image 12", type: "image" },
    { url: clientImage13, alt: "Reception Image 13", type: "image" },
    // Add videos in the same format as images
    { url: clientVideo1, alt: "Video 1", type: "video" },
    { url: clientVideo2, alt: "Video 1", type: "video" },
    { url: clientVideo3, alt: "Video 1", type: "video" },
    { url: clientVideo4, alt: "Video 1", type: "video" },
    { url: clientVideo5, alt: "Video 1", type: "video" },
    { url: clientVideo6, alt: "Video 1", type: "video" },
    { url: clientVideo7, alt: "Video 1", type: "video" },
    { url: clientVideo8, alt: "Video 1", type: "video" },
    { url: clientVideo9, alt: "Video 1", type: "video" },
    { url: clientVideo10, alt: "Video 1", type: "video" },
    { url: clientVideo11, alt: "Video 1", type: "video" },
    { url: clientVideo12, alt: "Video 1", type: "video" },
    { url: clientVideo13, alt: "Video 1", type: "video" },
    { url: clientVideo14, alt: "Video 1", type: "video" },
    { url: clientVideo16, alt: "Video 1", type: "video" },
    { url: clientVideo17, alt: "Video 1", type: "video" },
    { url: clientVideo18, alt: "Video 1", type: "video" },
    { url: clientVideo19, alt: "Video 1", type: "video" },
    { url: clientVideo20, alt: "Video 1", type: "video" },
    { url: clientVideo21, alt: "Video 1", type: "video" },
    { url: clientVideo22, alt: "Video 1", type: "video" },
  ];

  return (
    <>
      <div className="gallery-hero">
        <div className="gallery-hero-content">
          <h1>Welcome to Our Gallery</h1>
          <p>
            Explore the moments we've captured and the events we've transformed.
          </p>
        </div>
      </div>
      <GallerySection title="Our Work and Clients" mediaItems={mediaItems} />

      <div className="Gallery-testimonials-section">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div
                className="testimonial-image"
                style={{ backgroundImage: `url(${testimonial.image})` }}
              ></div>
              <div className="testimonial-content">
                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                <h3 className="testimonial-name">- {testimonial.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryHero;
