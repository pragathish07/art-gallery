import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

const slidesData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/600x300',
    caption: 'Slide 1',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/600x300',
    caption: 'Slide 2',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/600x300',
    caption: 'Slide 3',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/600x300',
   
  },
];

const InfiniteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoPlay();

    return () => {
      stopAutoPlay();
    };
  }, []);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(goToNextSlide, 3000);
  };

  const stopAutoPlay = () => {
    clearInterval(intervalRef.current);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
  };

  return (
    <div className="carousel-container">
    
      <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        
        {[...slidesData, ...slidesData, ...slidesData].map((slide, index) => (
          <div key={`${slide.id}-${index}`} className="carousel-item">
            <img src={slide.image} alt={slide.caption} />
            
          </div>
        ))}
        
      </div>
      <button className="carousel-control prev" onClick={goToPrevSlide}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={goToNextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default InfiniteCarousel;
