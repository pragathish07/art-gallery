import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 lg:px-36 mt-4">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-8">
        <div className="lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
          <h2 className="text-[#c9ab81] font-semibold mb-2 text-3xl">Sri Ranga Tanjore Art Gallery</h2>
          <p>10/2, Annai Complex, Mambazhasalai, Ammamandapam Road, Srirangam, Trichy-6.</p>
          <p>+91- 9629892768
          </p>
          <p>
            <a href="mailto:srirangatanjoreartgallery@gmail.com" className="text-blue-600">
            srirangatanjoreartgallery@gmail.com
            </a>
          </p>
        </div>
        <div className="lg:w-1/3 mb-8 lg:mb-0 flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com/profile.php?id=100092446749421&ref=xav_ig_profile_web" target="_blank" rel="noopener noreferrer" className="text-[#c9ab81] hover:text-blue-700">
              <FaFacebook size={36} />
            </a>
            <a href="https://www.instagram.com/srirangatanjoreart?igsh=MWV2OHNsbHo1dHp4bQ==" target="_blank" rel="noopener noreferrer" className="text-[#c9ab81] hover:text-pink-700">
              <FaInstagram size={36} />
            </a>
            
            <a href="https://youtube.com/@srirangatanjoreartgallery?si=gB6zf0RQg1FJ66tq" target="_blank" rel="noopener noreferrer" className="text-[#c9ab81] hover:text-red-700">
              <FaYoutube size={36} />
            </a>
            <a href="https://wa.me/919629892768" target="_blank" rel="noopener noreferrer" className="text-[#c9ab81] hover:text-red-700">
              <FaWhatsapp size={36} />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/" className="text-[#c9ab81] hover:underline mb-2 text-xl">Home</Link>
            <Link to="/about" className="text-[#c9ab81] hover:underline mb-2 text-xl">About</Link>
            <Link to="/gallery" className="text-[#c9ab81] hover:underline mb-2 text-xl">Gallery</Link>
            <Link to="/contact" className="text-[#c9ab81] hover:underline text-xl">Contact</Link>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="mb-2">© 2024 Sri Ranga Tanjore Art Gallery. All rights reserved.</p>
        <p className="text-sm">
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
          {' | '}
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
