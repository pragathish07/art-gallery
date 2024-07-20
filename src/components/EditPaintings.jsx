import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../services/firebaseConfig';

const EditPainting = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [painting, setPainting] = useState({
    title: '',
    image: '',
    description: '',
    size: '',
    price: ''
  });

  useEffect(() => {
    const fetchPainting = async () => {
      const docRef = doc(db, 'paintings', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPainting(docSnap.data());
      } else {
        console.error('No such document!');
      }
    };

    fetchPainting();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPainting({ ...painting, [name]: value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const storageRef = ref(storage, `paintings/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setPainting({ ...painting, image: downloadURL });
    }
  };

  const savePainting = async (e) => {
    e.preventDefault();
    try {
      const paintingDoc = doc(db, 'paintings', id);
      await updateDoc(paintingDoc, painting);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating painting: ', error);
    }
  };

  const deleteImage = async () => {
    try {
      if (painting.image) {
        const imageRef = ref(storage, painting.image);
        await deleteObject(imageRef);
        setPainting({ ...painting, image: '' });
      }
    } catch (error) {
      console.error('Error deleting image: ', error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-8">Edit Painting</h2>
      <form onSubmit={savePainting}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={painting.title}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          {painting.image && <img src={painting.image} alt="Preview" className="mt-2 w-full h-auto" />}
          {painting.image && (
            <button type="button" onClick={deleteImage} className="mt-2 p-2 bg-red-500 text-white rounded-lg">
              Delete Image
            </button>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={painting.description}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Size</label>
          <input
            type="text"
            name="size"
            value={painting.size}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="text"
            name="price"
            value={painting.price}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <button type="submit" className="w-full p-2 bg-yellow-500 text-white rounded-lg">Save Painting</button>
      </form>
    </div>
  );
};

export default EditPainting;
