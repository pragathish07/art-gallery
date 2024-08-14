import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { motion } from 'framer-motion';
import '../index.css'; // Assuming you have the animations in this file
import { Link } from 'react-router-dom';

const ServicePage = () => {

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <div className="bg-primary py-10 px-5 md:px-10 lg:px-20 mt-20 font-cormorant">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.header
          className="text-center mb-10"
          initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={sectionVariants}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-c9ab81 mb-4">Sri Ranga Tanjore Art Gallery</h1>
          <p className="text-xl md:text-2xl font-semibold text-c9ab81">Celebrating a Legacy of Artistic Excellence</p>
        </motion.header>

        {/* Offerings Section */}
        <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={sectionVariants}
        className="mb-10">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-c9ab81 mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Offerings
          </motion.h2>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            At Sri Ranga Tanjore Art Gallery, we offer a diverse range of traditional and authentic handmade Tanjore Paintings, meticulously crafted to suit various preferences and spaces.
            Our collection includes sizes from compact pieces perfect for return gifts to grand paintings that can be the centerpiece of any room.
            The price of each painting varies based on size, intricacy, and customization options.
          </motion.p>
          <motion.h3
            className="text-xl font-semibold mb-2"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Painting Sizes and Pricing:
          </motion.h3>
          <motion.ul
            className="list-disc list-inside mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <li>Small Sizes: 10×8 inches, 12×10 inches</li>
            <li>Medium Sizes: 15×12 inches, 18×14 inches, 20×16 inches, 24×18 inches</li>
            <li>Large Sizes: 30×24 inches, 36×24 inches</li>
            <li>Extra-Large Sizes: 4×3 feet, 6×4 feet, 8×4 feet, 8×6 feet</li>
          </motion.ul>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our pricing reflects the quality and craftsmanship of each piece, with prices ranging from ₹1500 to over ₹3 lakhs, depending on the size and intricacy of the painting.
          </motion.p>
          <motion.h3
            className="text-xl font-semibold mb-2"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Customization:
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            We understand that each space and individual preference is unique. Therefore, we offer customization options to ensure your Tanjore Painting fits perfectly into your desired setting:
          </motion.p>
          <motion.ul
            className="list-disc list-inside mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <li>Custom Sizes: Available upon request to match your specific requirements.</li>
            <li>Design Preferences: Tailored to include specific themes, colors, or subjects.</li>
            <li>Personalized Gifts: Unique paintings designed for special occasions or return gifts.</li>
          </motion.ul>
        </motion.section>

        {/* Contact Us Section */}
        <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={sectionVariants}
        
        className="mb-10">
          <motion.h2
            className="text-4xl md:text-3xl font-bold text-c9ab81 mb-4 text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us for Custom Orders
          </motion.h2>
          <div className="flex items-center mb-4">
            <MdLocationOn className="text-2xl mr-2 text-c9ab81" />
            <p>Sri Ranga Tanjore Art Gallery, 10/2, Annai Complex, Mambazhasalai, Ammamandapam Road, Srirangam, Trichy-6.</p>
          </div>
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-2xl mr-2 text-c9ab81" />
            <p>Call: 9629892768</p>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='mb-8'
          >
            Explore the timeless beauty of Tanjore Paintings in the size and style that suits your needs. Let us help you bring a piece of this magnificent art form into your home.
          </motion.p>
        {/* center the button */}
          

          <button
           className='flex justify-center m-auto bg-third text-white font-bold px-4 py-2 rounded-full'
          >
            <Link to="/contact" className="">Contact Us</Link>

          </button>
        </motion.section>

        
      </div>
    </div>
  );
};

export default ServicePage;
