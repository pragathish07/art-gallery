import React from 'react';
import img from '/g-icon.png';

const VisitUs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start p-8 lg:p-16 lg:px-36 bg-[#fcf8ef]">
      <div className="w-full lg:w-1/3 mb-8 lg:mb-0 mr-2">
        <h2 className="text-[#c9ab81] font-semibold mb-2 text-3xl">FIND THE GALLERY</h2>
        <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
        <p className='text-2xl'>Sri Ranga Tanjore Art Gallery</p>
        <p className='text-2xl'>10/2, Annai Complex, Mambazhasalai, Ammamandapam Road, Srirangam, Trichy-6.</p>
        <p className='text-2xl'>+91-9629892768</p>
        <p className='text-2xl'>
          <a href="mailto:srirangatanjoreartgallery@gmail.com" className="text-blue-600">
            srirangatanjoreartgallery@gmail.com
          </a>
        </p>
        <a
          href="https://www.google.com/maps/dir/CHATHIRAM+BUS+STAND,+College+Road,+Tiruchirappalli,+Tamil+Nadu/Sri+Ranga+Tanjore+Art+Gallery,+Annai+Complex,+Ammamandapam+Road,+Srirangam,+Mambazhasalai,+Tiruchirappalli,+Tamil+Nadu/@10.8388448,78.6899275,16.83z/data=!4m13!4m12!1m5!1m1!1s0x3baaf50027d3ae7f:0x4e8b0a38ef6c99c1!2m2!1d78.6956978!2d10.8314427!1m5!1m1!1s0x3baaf5e15b0e0d47:0xd7f1bcdc711c4cc7!2m2!1d78.694298!2d10.8446297?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-[#c9ab81] text-white px-4 py-2 rounded"
        >
          Get Directions
        </a>
      </div>
      <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
        <iframe
          title="Sri Ranga Tanjore Art Gallery Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.466596999965!2d78.68394441505703!3d10.864004192265337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa8545db9ecb83%3A0x536b5a7b2c5ec88b!2sSri%20Ranga%20Tanjore%20Art%20Gallery!5e0!3m2!1sen!2sin!4v1690382057413!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col items-center">
        <h4 className="text-[#c9ab81] font-semibold mb-2">REVIEW US</h4>
        <h3 className="text-2xl font-bold mb-4">On</h3>
        <a href="https://www.google.com/maps/place/Sri+Ranga+Tanjore+Art+Gallery" target="_blank" rel="noopener noreferrer">
          <img src={img} alt="Google Reviews" className="h-10" />
        </a>
      </div>
    </div>
  );
};

export default VisitUs;
