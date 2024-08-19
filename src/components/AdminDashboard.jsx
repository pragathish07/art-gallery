import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../services/firebaseConfig';
import { useAuth } from '../services/AuthContext';
import { useNavigate } from 'react-router-dom';



function MessagesTab() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        // fetch the contact form submissions from the 'contactForms' collection
        const querySnapshot = await getDocs(collection(db, 'contactForms'));
        const submissionsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setSubmissions(submissionsData);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <div className="min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-[#c9ab81]">Contact Form Submissions</h2>
      <ul className="space-y-4">
        {submissions.map(submission => (
          <li key={submission.id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <p className="text-lg font-semibold text-gray-700"><strong>Name:</strong> {submission.name}</p>
            <p className="text-lg font-semibold text-gray-700"><strong>Email:</strong> {submission.email}</p>
            <p className="text-lg font-semibold text-gray-700"><strong>Message:</strong> {submission.message}</p>
            <p className="text-sm text-gray-500"><strong>Submitted on:</strong> {new Date(submission.timestamp.seconds * 1000).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const AdminDashboard = () => {
  const { user } = useAuth();
  const [paintings, setPaintings] = useState([]);
  const [filteredPaintings, setFilteredPaintings] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newPainting, setNewPainting] = useState({ image: '' });
  const [imagePreview, setImagePreview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('list');

  useEffect(() => {
    const fetchPaintings = async () => {
      setIsLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, 'paintings'));
        const paintingsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPaintings(paintingsData);
        setFilteredPaintings(paintingsData);
      } catch (error) {
        setError('Failed to fetch paintings.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPaintings();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPainting({ ...newPainting, file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const addPainting = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const docRef = await addDoc(collection(db, 'paintings'), { image: '' });
      const paintingId = docRef.id;
      const storageRef = ref(storage, `paintings/${paintingId}`);
      await uploadBytes(storageRef, newPainting.file);
      const downloadURL = await getDownloadURL(storageRef);
      await updateDoc(docRef, { image: downloadURL });
      setPaintings([...paintings, { ...newPainting, id: paintingId, image: downloadURL }]);
      setFilteredPaintings([...filteredPaintings, { ...newPainting, id: paintingId, image: downloadURL }]);
      setNewPainting({ image: '' });
      setImagePreview('');
      document.getElementById('fileInput').value = null;
    } catch (error) {
      setError('Error adding painting.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (paintingId) => {
    setIsLoading(true);
    setError('');
    try {
      await deleteDoc(doc(db, 'paintings', paintingId));
      const storageRef = ref(storage, `paintings/${paintingId}`);
      await deleteObject(storageRef);
      setPaintings(paintings.filter(painting => painting.id !== paintingId));
      setFilteredPaintings(filteredPaintings.filter(painting => painting.id !== paintingId));
    } catch (error) {
      setError('Error deleting painting.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row mt-20">
      <aside className="w-full md:w-64 h-auto md:h-screen bg-gray-800 text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <nav className="flex-1">
          <ul>
            <li className={`mb-2 p-2 cursor-pointer ${activeTab === 'list' ? 'bg-gray-700' : ''}`} onClick={() => setActiveTab('list')}>List Paintings</li>
            <li className={`mb-2 p-2 cursor-pointer ${activeTab === 'add' ? 'bg-gray-700' : ''}`} onClick={() => setActiveTab('add')}>Add Painting</li>
            <li className={`mb-2 p-2 cursor-pointer ${activeTab === 'messages' ? 'bg-gray-700' : ''}`} onClick={() => setActiveTab('messages')}>Messages</li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {activeTab === 'list' && (
          <>
            <div className="flex flex-col md:flex-row md:justify-between items-start mb-4">
              <h3 className="text-2xl font-bold mb-2 md:mb-0">Manage Paintings</h3>
              
            </div>
            {filteredPaintings.length > 0 ? (
              <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {filteredPaintings.map(painting => (
                  <li key={painting.id} className="relative bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <img src={painting.image} alt="Painting" className="w-full h-auto object-cover cursor-pointer" />
                    <button 
                      onClick={() => handleDelete(painting.id)} 
                      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
                      {isLoading ? "Deleting..." : "Delete"}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              !isLoading && <p>No paintings found.</p>
            )}
          </>
        )}

        {activeTab === 'add' && (
          <form onSubmit={addPainting} className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Add New Painting</h3>
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
            <button type="submit" className="w-full p-2 bg-yellow-500 text-white rounded-lg">
              {isLoading ? 'Adding...' : 'Add Painting'}
            </button>
          </form>
        )}

        {activeTab === 'messages' && (
         
            <MessagesTab/>
          
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
