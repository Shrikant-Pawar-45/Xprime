import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import trendingData from '../assets/trendingData.json';
import slideshow from '../assets/slideshow.json';

export default function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide change every 3 seconds
  const sliderData = slideshow.slice();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % sliderData.length
    );
  };

  return (
    <>
      <div className="main-content-Top">
        <div className="main-content-Top--conatiner">
          <h1><b>X</b> prime</h1>
          <p>
            <b> Xprime – A Prompt-to-Image Showcase </b>
            Explore a visual gallery of AI-generated images,
            each paired with the prompt that created it.
            Get inspired, copy any prompt, and generate your
            own masterpiece using your favorite AI tool. Simple,
            creative, and ready to spark ideas.
          </p>
          <div className="main-content-Top--conatiner--icons">
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </div>
        </div>
        <div className="sidepanel">
          <div className="sidepanel--container">
            <div className="slider">
              {/* Uncomment below to enable prev/next buttons */}
              {/* <button className="slider-button prev" onClick={goToPrevious} aria-label="Previous Slide">
                &#10094;
              </button> */}
              <div className="slider-image-container">
                <img
                  src={sliderData[currentIndex].image}
                  alt={sliderData[currentIndex].title}
                  className="slider-image"
                />
                <div className="slider-overlay">
                  {/* {sliderData[currentIndex].title} */}
                </div>
              </div>
              {/* <button className="slider-button next" onClick={goToNext} aria-label="Next Slide">
                &#10095;
              </button> */}
            </div>
            <div className="slider-dots">
              {sliderData.map((_, idx) => (
                <span
                  key={idx}
                  className={`slider-dot${idx === currentIndex ? ' active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}