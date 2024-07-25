import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebaseConfig'; // Adjust the path according to your file structure

const PaintingDetails = () => {
  const { id } = useParams();
  const [painting, setPainting] = useState(null);
  const [relatedPaintings, setRelatedPaintings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPainting = async () => {
      try {
        const docRef = doc(db, 'paintings', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPainting({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error('No such document!');
        }
      } catch (error) {
        console.error('Error fetching painting:', error);
      }
    };

    const fetchRelatedPaintings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'paintings'));
        const paintingsData = querySnapshot.docs
          .filter(doc => doc.id !== id)
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .slice(0, 3);
        setRelatedPaintings(paintingsData);
      } catch (error) {
        console.error('Error fetching related paintings:', error);
      }
    };

    fetchPainting();
    fetchRelatedPaintings();
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="text-center mt-24">Loading...</div>;
  } 

  if (!painting) {
    return <div className="text-center mt-24">Painting not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 mt-24">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2">
          <img src={painting.image} alt={painting.title} className="w-full h-[500px] rounded-lg shadow-lg" />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{painting.title}</h1>
          <p className="text-gray-700 mb-4">{painting.description}</p>
          <p className="text-gray-900 font-semibold">Size: {painting.size}</p>
          {/* Uncomment and update the artist field if necessary */}
          {/* <p className="text-gray-900 font-semibold">Artist: {painting.artist}</p> */}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Paintings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPaintings.map(relatedPainting => (
            <div key={relatedPainting.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={relatedPainting.image} alt={relatedPainting.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{relatedPainting.title}</h3>
                <p className="mt-2 text-gray-600">{relatedPainting.description}</p>
                <p className="mt-2 text-gray-800 font-bold">₹{relatedPainting.price}</p>
                <a href={`/painting/${relatedPainting.id}`} className="mt-4 inline-block text-yellow-500 hover:text-yellow-600">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaintingDetails;
