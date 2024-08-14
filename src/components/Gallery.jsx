import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../index.css';
import { db } from '../services/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { motion } from 'framer-motion';

const FeaturedSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const querySnapshot = await getDocs(collection(db, 'paintings'));
      let paintingsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      paintingsData = paintingsData.sort(() => Math.random() - 0.5);
      setImages(paintingsData);
      setLoading(false);
    };

    fetchImages();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
  }; 

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <div id="gallery" className="py-16 bg-primary mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12 text-c9ab81">Our Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {loading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} height={256} />
            ))
          ) : (
            images.map((image, index) => (
              <div
                key={index}
                className="relative cursor-pointer"
                onClick={() => openModal(image)}
              >
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={sectionVariants}
                  className="w-full h-96 relative overflow-hidden"
                >
                  <img 
                    src={image.image} 
                    alt={`Painting ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ aspectRatio: '16 / 9' }} // Ensures a 1:1 aspect ratio
                  />
                </motion.div>
              </div>
            ))
          )}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Painting Modal"
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
      >
        <div className="relative p-4 bg-white  rounded-lg shadow-lg max-w-3xl mx-auto">
          <button 
            onClick={closeModal} 
            className="absolute -top-4 right-4 text-white bg-red-500 rounded-full p-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            X
          </button>
          <motion.img 
            src={selectedImage.image} 
            alt="Selected Painting" 
            className="w-fit h-auto rounded-lg max-h-96" 
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default FeaturedSection;
