import React, { useState } from 'react';
import { db } from '../services/firebaseConfig';
import { serverTimestamp } from 'firebase/firestore'; // Import FieldValue directly
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const contactData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      timestamp: serverTimestamp(), // Use FieldValue directly
    };

    try {
      // add the contact form data to the 'contactForms' collection
      const contactCollectionRef = collection(db, 'contactForms');
      await addDoc(contactCollectionRef, contactData);      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset the form
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mt-28 m-8'>
      <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-5xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input 
              type="text" 
              name="name" 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input 
              type="text" 
              name="phone" 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea 
              name="message" 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              rows="4" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button 
            type="submit" 
            className={`w-full p-2 ${loading ? 'bg-gray-400' : 'bg-yellow-500'} text-white rounded-lg`} 
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
