import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AboutCarousel = ({ slidesData }) => {
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
      className="relative overflow-hidden lg:w-[700px] h-96 m-auto md:w-[600px] sm:w-[500px]"
    >
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slidesData.map((slide, index) => (
          <div key={slide.id} className="min-w-full h-96 flex items-center justify-center bg-gray-200">
            <img
              src={slide.image}
              alt={slide.caption || `Slide ${index + 1}`}
              className="w-[700px] h-full"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow-md hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
        onClick={goToPrevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow-md hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
        onClick={goToNextSlide}
      >
        &#10095;
      </button>
    </motion.div>
  );
};

export default AboutCarousel;
