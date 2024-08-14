import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import '../index.css';
import { motion } from 'framer-motion';

const FeaturedSection = () => {
  const [paintings, setPaintings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        //fetch random paintings from the db
        

        const querySnapshot = await getDocs(collection(db, 'paintings'));
        const paintingsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPaintings(paintingsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching paintings:', error);
        setLoading(false);
      }
    };

    fetchPaintings();
  }, []);

  if (loading) {
    return <div className="text-center py-16">Loading...</div>;
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <motion.div 
    initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={sectionVariants}
    id="gallery" className="py-16 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12 text-c9ab81">Featured Paintings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paintings.slice(0, 6).map(painting => (
            <div key={painting.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-fit">
              <img src={painting.image} alt={painting.title} className="w-[500px] h-80 object-cover"/>
              <div className="p-4">
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedSection;
