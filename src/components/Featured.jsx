// FeaturedSection.jsx

import React from 'react';
import paintings from '../data/paintings';

const FeaturedSection = () => {
  return (
    <div id="gallery" className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Paintings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paintings.slice(0, 6).map(painting => (
            <div key={painting.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={painting.image} alt={painting.title} className="w-full h-64 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{painting.title}</h3>
                <p className="mt-2 text-gray-600">{painting.description}</p>
                <p className="mt-2 text-gray-800 font-bold">₹{painting.price}</p>
                <a href={`/painting/${painting.id}`} className="mt-4 inline-block text-yellow-500 hover:text-yellow-600">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
