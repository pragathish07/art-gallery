import React from 'react';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import { FaAward, FaPaintBrush, FaLightbulb, FaHandsHelping, FaGraduationCap } from 'react-icons/fa';

const AboutPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <div className="font-sans mt-20">
      {/* Header Section */}
      <motion.section
        className="py-12 bg-white text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={sectionVariants}
      >
        <header className="relative h-[700px] bg-cover bg-no-repeat" style={{ backgroundImage: "url('src/assets/about1.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="relative z-10 flex items-center justify-center h-full text-white">
            <h1 className="text-6xl font-bold font-playfair">About <br />Sri Ranga Tanjore Art Gallery</h1>
          </div>
        </header>
      </motion.section>

      {/* What We Do Section */}
      <motion.section
        className="py-12 flex flex-col md:flex-row bg-white text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className='md:basis-1/2'>
          <h2 className="text-3xl font-bold font-playfair mb-4">What We Do</h2>
          <p className="text-lg max-w-2xl mx-auto">
            We create beautiful traditional Indian art pieces, blending rich heritage with modern creativity. Our artworks include Tanjore paintings, Madhubani art, and more, crafted with meticulous attention to detail.
          </p>
        </div>
        <div className='md:basis-1/2 mt-8 md:mt-0'><img src="src/assets/about1.jpg" alt="About" className="w-full h-auto" /></div>
      </motion.section>

      {/* Our Mission Section */}
      <motion.section
        className="py-12 bg-gray-100 text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold font-playfair mb-4">Our Mission</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Our mission is to preserve and promote traditional Indian art by creating exquisite pieces that resonate with art enthusiasts and collectors around the world.
        </p>
      </motion.section>

      {/* Our Achievements Section */}
      <motion.section
        className="py-12 bg-white text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold font-playfair mb-4">Our Achievements</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex flex-wrap space-x-4 space-y-4 md:space-y-0 md:space-x-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1 min-w-[250px]">
              <h3 className="text-xl font-semibold mb-2">Vaazhum Kaivinai Pokkisham (Living Legend)</h3>
              <p>Awarded by the Tamil Nadu Government for his lifelong dedication and contribution to Tanjore Art.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1 min-w-[250px]">
              <h3 className="text-xl font-semibold mb-2">Kalai Mudhumani</h3>
              <p>Award for outstanding contribution to the arts.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1 min-w-[250px]">
              <h3 className="text-xl font-semibold mb-2">Raja Kalaignan Virudhu</h3>
              <p>Recognized for excellence in Tanjore Art.</p>
            </div>
          </div>
          <div className="flex flex-wrap space-x-4 space-y-4 md:space-y-0 md:space-x-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1 min-w-[250px]">
              <h3 className="text-xl font-semibold mb-2">Tanjore Art Best Kala Ratna National Award</h3>
              <p>National recognition for excellence in Tanjore Art.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1 min-w-[250px]">
              <h3 className="text-xl font-semibold mb-2">Raja Kalaignan Lifetime Achievement Award (2014)</h3>
              <p>Presented by the Tamil Nadu Government for exceptional contributions to the art form.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section
        className="py-12 bg-gray-100 text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold font-playfair mb-4">Our Values</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaAward className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p>Striving for the highest quality in every piece of art we create.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaPaintBrush className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Heritage</h3>
            <p>Preserving and promoting the rich tradition of Tanjore Paintings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaLightbulb className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p>Embracing contemporary techniques while maintaining traditional integrity.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaHandsHelping className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Empowerment</h3>
            <p>Using art to empower individuals, especially women, in our community.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaGraduationCap className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p>Mentoring the next generation of artists to carry forward the legacy of Tanjore Paintings.</p>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="py-12 bg-white text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold font-playfair mb-4">Get in Touch</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Interested in our artwork? Want to place a custom order? Contact us today and let's create something beautiful together.
        </p>
        <a href="/contact" className="px-8 py-4 bg-yellow-500 text-white rounded-lg font-semibold">Contact Us</a>
      </motion.section>
    </div>
  );
};

export default AboutPage;
