import React from 'react';
import Navbar from './Navbar';
import InfiniteCarousel from './Carousel/Carousel';
import FeaturedSection from './Featured';

const Home = () => {
  return (
    <div>
      <Navbar />
      <InfiniteCarousel />
      
      <div className="bg-cover bg-center m-12 flex items-center justify-center" style={{ backgroundImage: "url('/path-to-hero-image.jpg')" }}>
        <div className="text-center bg-black bg-opacity-50 p-10 rounded-lg">
          <h1 className="text-5xl font-bold text-white">Sri Ranga Tanjore Art Gallery</h1>
          <p className="mt-4 text-xl text-white">Celebrating a Legacy of Artistic Excellence</p>
          <div className="mt-8">
            <a href="/gallery" className="px-8 py-3 bg-yellow-500 text-lg rounded-lg hover:bg-yellow-600 transition duration-300">Explore Gallery</a>
            <a href="/contact" className="ml-4 px-8 py-3 bg-transparent border border-white text-lg rounded-lg text-white hover:bg-white hover:text-black transition duration-300">Contact Us</a>
          </div>
        </div>
      </div>  

      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">About Sri Ranga Tanjore Art Gallery</h2>
        <p className="text-gray-700 mb-12 text-center">
          Founded by the esteemed Thiru L. Ramanujam, our gallery stands as a beacon of Tanjore Painting's rich heritage, admired and recognized by art enthusiasts worldwide.
        </p>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Leadership: Mrs. R. Lavanya</h3>
            <p className="text-gray-700">
              Mrs. R. Lavanya, the Managing Director of Sri Ranga Tanjore Art Gallery, has seamlessly carried forward her father’s legacy. Under her leadership, the gallery has flourished, preserving the rich heritage of Tanjore Art and extending its reach globally.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>Raja Kalaignan Lifetime Achievement Award (2014)</li>
              <li>Reviving Heritage through contemporary methods</li>
              <li>Empowering Women through Tanjore Painting</li>
              <li>Cultural Connections with prestigious exhibitions</li>
            </ul>
          </div>
        </div>
      </div>

      <FeaturedSection />
    </div>
  );
};

export default Home;
