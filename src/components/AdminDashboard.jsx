import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../services/firebaseConfig';
import { useAuth } from '../services/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [paintings, setPaintings] = useState([]);
  const [newPainting, setNewPainting] = useState({
    title: '',
    image: '',
    description: '',
    size: '',
    price: ''
  });
  const [imagePreview, setImagePreview] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPaintings = async () => {
      const querySnapshot = await getDocs(collection(db, 'paintings'));
      const paintingsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPaintings(paintingsData);
    };

    fetchPaintings();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPainting({ ...newPainting, [name]: value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const storageRef = ref(storage, `paintings/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setNewPainting({ ...newPainting, image: downloadURL });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const addPainting = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'paintings'), newPainting);
      setPaintings([...paintings, { ...newPainting, id: docRef.id }]);
      setNewPainting({ title: '', image: '', description: '', size: '', price: '' });
      setImagePreview('');
      document.getElementById('fileInput').value = null;
    } catch (error) {
      console.error('Error adding painting: ', error);
    }
  };

  const startEditing = (paintingId) => {
    navigate(`/edit-painting/${paintingId}`);
  };

  const deletePainting = async (paintingId) => {
    try {
      const paintingDocRef = doc(db, "paintings", paintingId);
      await deleteDoc(paintingDocRef);
      setPaintings(paintings.filter(painting => painting.id !== paintingId));
    } catch (error) {
      console.error("Error deleting painting: ", error.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-8">Admin Dashboard</h2>

      <form onSubmit={addPainting} className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Add New Painting</h3>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={newPainting.title}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            id="fileInput"
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          {imagePreview && (
            <div className="mt-4">
              <img src={imagePreview} alt="Image Preview" className="w-full h-auto" />
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={newPainting.description}
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
            value={newPainting.size}
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
            value={newPainting.price}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <button type="submit" className="w-full p-2 bg-yellow-500 text-white rounded-lg">Add Painting</button>
      </form>

      <h3 className="text-2xl font-bold mb-4">Manage Paintings</h3>
      <ul>
        {paintings.map(painting => (
          <li key={painting.id} className="mb-4 p-4 border border-gray-300 rounded-lg">
            <h4 className="text-xl font-bold mb-2">{painting.title}</h4>
            <img src={painting.image} alt={painting.title} className="w-full h-auto mb-2" />
            <p className="mb-2">{painting.description}</p>
            <p className="mb-2">Size: {painting.size}</p>
            <p className="mb-2">Price: {painting.price}</p>
            <button onClick={() => startEditing(painting.id)} className="mt-2 p-2 bg-blue-500 text-white rounded-lg mr-2">Edit</button>
            <button onClick={() => deletePainting(painting.id)} className="mt-2 p-2 bg-red-500 text-white rounded-lg">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
