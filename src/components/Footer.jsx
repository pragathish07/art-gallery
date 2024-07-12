// Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Contact Information */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-2xl font-bold mb-4">Sri Ranga Tanjore Art Gallery</h3>
            <p>[Gallery Address]</p>
            <p>Call: [Phone Number]</p>
            <p>Email: [Email Address]</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 mb-6 lg:mb-0">
            <Link to="/gallery" className="hover:text-yellow-500">Gallery</Link>
            <Link to="/about" className="hover:text-yellow-500">About</Link>
            <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
            <Link to="/contact" className="hover:text-yellow-500">Custom Orders</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.293H9.691v-3.622h3.129V8.404c0-3.1 1.893-4.788 4.656-4.788 1.325 0 2.462.099 2.794.142v3.24h-1.918c-1.504 0-1.796.714-1.796 1.764v2.312h3.59l-.467 3.622h-3.123V24h6.116c.732 0 1.325-.593 1.325-1.324V1.325C24 .593 23.407 0 22.675 0z"/>
              </svg>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557a9.828 9.828 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.3a9.867 9.867 0 0 1-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.94 2.213-4.94 4.94 0 .388.045.765.128 1.127A13.98 13.98 0 0 1 1.675 3.15a4.924 4.924 0 0 0-.667 2.484 4.934 4.934 0 0 0 2.195 4.107 4.902 4.902 0 0 1-2.237-.617v.062a4.939 4.939 0 0 0 3.96 4.84 4.938 4.938 0 0 1-2.231.085 4.94 4.94 0 0 0 4.609 3.429A9.868 9.868 0 0 1 0 21.54a13.94 13.94 0 0 0 7.548 2.213c9.142 0 14.142-7.72 14.142-14.417 0-.221-.005-.442-.015-.662A10.14 10.14 0 0 0 24 4.557z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.332.013 7.052.072 5.771.131 4.548.413 3.512 1.448 2.476 2.484 2.194 3.707 2.135 4.988.987 4.332 1.013 3.732 1.013 7c0 3.268.011 3.668.072 4.948.059 1.281.341 2.504 1.377 3.54.975.975 2.198 1.246 3.48 1.308 1.28.058 1.68.07 4.948.07s3.668-.012 4.948-.072c1.281-.062 2.504-.333 3.54-1.308.975-.975 1.246-2.198 1.308-3.48.058-1.28.07-1.68.07-4.948s-.012-3.668-.072-4.948c-.062-1.28-.333-2.504-1.308-3.48-.975-.975-2.198-1.246-3.48-1.308C15.668.012 15.268 0 12 0zm0 5.838a6.162 6.162 0 0 0-6.162 6.162A6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.125a3.963 3.963 0 0 1-3.963-3.963A3.963 3.963 0 0 1 12 8.038a3.963 3.963 0 0 1 3.963 3.963A3.963 3.963 0 0 1 12 15.963zm7.539-11.69a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p>&copy; {new Date().getFullYear()} Sri Ranga Tanjore Art Gallery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
