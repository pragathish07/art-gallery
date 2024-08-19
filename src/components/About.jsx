import React from 'react';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import { FaAward, FaPaintBrush, FaLightbulb, FaHandsHelping, FaGraduationCap } from 'react-icons/fa';
import '../index.css'; // Assuming you have the animations in this file
import { Link } from 'react-router-dom';
import InfiniteCarousel from './Carousel/Carousel';
import AboutData from './Carousel/about';
import AboutCarousel from './Carousel/AboutCarousel';

const AboutPage = () => {

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <div className="mt-20 font-cormorant text-gray-900 bg-primary"> {/* Ensure the background color is set here */}
      {/* Header Section */}
      <motion.section
        className="py-12 text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={sectionVariants}
      >
        <header className="relative h-[700px] bg-cover bg-no-repeat" style={{ backgroundImage: "url('/about1.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 flex items-center justify-center h-full text-white">
            <h1 className="text-6xl font-bold">About <br />Sri Ranga Tanjore Art Gallery</h1>
          </div>
        </header>
      </motion.section>

      {/* What We Do Section */}
      <motion.section
        className="py-12 flex flex-col md:flex-row text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className='md:basis-1/2'>
          <h2 className="text-3xl font-bold text-c9ab81 mb-4 animate-fade-in">What We Do</h2>
          <p className="text-lg max-w-2xl mx-auto animate-slide-in">
            We create beautiful traditional Indian art pieces, blending rich heritage with modern creativity. Our artworks include Tanjore paintings, and more, crafted with meticulous attention to detail.
          </p>
        </div>
        <div className='md:basis-1/2 mt-8 md:mt-0 relative animate-slide-in'>
          <img src="/about1.jpg" alt="About" className="w-full h-auto" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <p className="text-lg max-w-2xl mx-auto">Our gallery features a diverse collection of traditional Indian art.</p>
          </div>
        </div>
      </motion.section>

      {/* Our Mission Section */}
      <motion.section
        className="py-12 text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-c9ab81 mb-4 animate-fade-in">Our Mission</h2>
        <p className="text-lg max-w-2xl mx-auto animate-slide-in">
          Our mission is to preserve and promote traditional Indian art by creating exquisite pieces that resonate with art enthusiasts and collectors around the world.
        </p>
      </motion.section>

      {/* Our Achievements Section */}
      <motion.section
        className="py-12 text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-c9ab81 mb-4 animate-fade-in">Our Achievements</h2>
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-in">
          <div className="flex flex-wrap space-x-4 space-y-4 md:space-y-0 md:space-x-8">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md flex-1 min-w-[250px]">
              <h3 className="text-xl font-semibold mb-2">Vaazhum Kaivinai Pokkisham (Living Legend)</h3>
              <p>Awarded by the Tamil Nadu Government for his lifelong dedication and contribution to Tanjore Art.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md flex-1 min-w-[250px]">
              <h3 className="text-xl font-semibold mb-2">Kalai Mudhumani</h3>
              <p>Award for outstanding contribution to the arts.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md flex-1 min-w-[250px]">
              <h3 className="text-xl font-semibold mb-2">Raja Kalaignan Virudhu</h3>
              <p>Recognized for excellence in Tanjore Art.</p>
            </div>
          </div>
          <div className="flex flex-wrap space-x-4 space-y-4 md:space-y-0 md:space-x-8">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md flex-1 min-w-[250px]">
              <h3 className="text-xl font-semibold mb-2">Tanjore Art Best Kala Ratna National Award</h3>
              <p>National recognition for excellence in Tanjore Art.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md flex-1 min-w-[250px]">
              <h3 className="text-xl font-semibold mb-2">Raja Kalaignan Lifetime Achievement Award (2014)</h3>
              <p>Presented by the Tamil Nadu Government for exceptional contributions to the art form.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section
        className="py-12 text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-c9ab81 mb-4 animate-fade-in">Our Values</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center animate-slide-in">
            <FaAward className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p>Striving for the highest quality in every piece of art we create.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center animate-slide-in">
            <FaPaintBrush className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Heritage</h3>
            <p>Preserving and promoting the rich tradition of Tanjore Paintings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center animate-slide-in">
            <FaLightbulb className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p>Embracing contemporary techniques while maintaining traditional integrity.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center animate-slide-in">
            <FaHandsHelping className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Empowerment</h3>
            <p>Using art to empower individuals, especially women, in our community.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center animate-slide-in">
            <FaGraduationCap className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p>Mentoring and educating the next generation of artists.</p>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="py-12 text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-c9ab81 mb-4 animate-fade-in">Join Us in Preserving Tradition</h2>
        <p className="text-lg max-w-2xl mx-auto animate-slide-in">
          Support our mission to keep the legacy of traditional Indian art alive. Explore our gallery, participate in our workshops, or commission a custom piece that speaks to your soul.
        </p>
        <button className="mt-8 bg-third  text-white py-3 px-6 rounded-full font-semibold shadow-lg animate-slide-in"><Link to="/gallery">Explore More</Link></button>
      </motion.section>
      <AboutCarousel slidesData={AboutData} width={20}/>
    </div>
  );
};

export default AboutPage;
