import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebaseConfig'; // Adjust the path according to your file structure

function Gallery() {
  const [paintings, setPaintings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'paintings'));
        const paintingsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPaintings(paintingsData);
      } catch (error) {
        console.error('Error fetching paintings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPaintings();
  }, []);

  if (loading) {
    return <div className="text-center mt-24">Loading...</div>;
  }

  return (
    <div className="mt-24">
      <div>
        <h1 className="text-center text-3xl">Our Gallery</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {paintings.map(painting => (
          <div key={painting.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={painting.image} alt={painting.title} className="w-full h-56 object-cover" />
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
  );
}

export default Gallery;
