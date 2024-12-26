import React, { useState } from "react";
import "./Review.css";

const slides = [
  {
    id: 1,
    image: "/assests/profile.png",
    name: "John Deo",
    description: "The photo studio exceeded my expectations with stunning quality and incredible attention to detail. Highly recommended for capturing your special moments!",
    stars: 4,
  },
  {
    id: 2,
    image: "/assests/profile.png",
    name: "Jane Doe",
    description: "Amazing service and professional team! They made sure every detail was perfect for our event photography.",
    stars: 4,
  },
  {
    id: 3,
    image: "/assests/profile.png",
    name: "Sam Smith",
    description:
      "Highly skilled photographers with a creative touch. Our family portraits turned out beautiful, and we couldn't be happier!",
    stars: 5,
  },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="slider-section">
      <h1 className="slider-header">CLIENT'S REVIEW</h1>
    <div className="slider-container">
      
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === currentIndex ? "active" : ""}`}
            key={slide.id}
          >
            <img src={slide.image} alt={slide.name} />
            <h3 className="name">{slide.name}</h3>
            <p className="description">{slide.description}</p>
            <div className="stars">
              {"★".repeat(slide.stars)}
            </div>
          </div>
        ))}
        <div className="arrows-client">
          <button className="arrow-client arrow-client-left" onClick={prevSlide}>
            <i className="bx bx-chevron-left"></i>
          </button>
          <button
            className="arrow-client arrow-client-right"
            onClick={nextSlide}
          >
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
        <div className="pagination">
          {slides.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "active" : ""}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Review;
