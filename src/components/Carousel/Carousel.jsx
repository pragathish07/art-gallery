import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';
import { motion } from 'framer-motion';


const InfiniteCarousel = (
  { slidesData }
) => {

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

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };


  return (
    <motion.div 
    initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={sectionVariants}
    className="carousel-container">
      <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slidesData.map((slide, index) => (
          <div key={slide.id} className="carousel-item">
            <img src={slide.image} alt={slide.caption || `Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={goToPrevSlide}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={goToNextSlide}>
        &#10095;
      </button>
    </motion.div>
  );
};

export default InfiniteCarousel;
