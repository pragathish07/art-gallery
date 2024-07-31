import React from 'react';

import img from '/g-icon.png';

const VisitUs = () => {
  return (
    <div className="flex justify-between items-start p-16 px-36 bg-[#fcf8ef]">
      <div className="w-2/3">
        <h2 className="text-[#c9ab81] font-semibold mb-2 text-3xl">FIND THE GALLERY</h2>
        <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
        <p>55, Sunder Nagar, Girdhar Marg, JLN Marg, Jaipur – 302017</p>
        <p>+91-8290961200</p>
        <p>
          <a href="mailto:info@mukeshartandframe.com" className="text-blue-600">
            info@mukeshartandframe.com
          </a>
        </p>
      </div>
      <div className="w-2/3">
        <iframe
          title="Mukesh Art Gallery Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.1302494919187!2d75.813243!3d26.861212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db52bf1a3a0f9%3A0x8a0b39a1a1d73290!2sMukesh%20Art%20Gallery!5e0!3m2!1sen!2sin!4v1690382057413!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="w-1/3 flex flex-col items-center">
        <h4 className="text-[#c9ab81] font-semibold mb-2">REVIEW US</h4>
        <h3 className="text-2xl font-bold mb-4">On</h3>
        <a href="https://www.google.com/maps/place/Mukesh+Art+Gallery" target="_blank" rel="noopener noreferrer">
          <img src={img} alt="Google Reviews" className="h-10" />
        </a>
      </div>
    </div>
  );
};

export default VisitUs;
