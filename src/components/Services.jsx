import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const Navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., sending an email or saving to the database
    console.log('Form data:', formData);
    // Clear form fields after submission
    setFormData({ name: '', email: '', message: '' });
  };

  const works = [
    { title: 'Traditional Tanjore Painting', image: '/images/work1.jpg' },
    { title: 'Custom Portrait', image: '/images/work2.jpg' },
    { title: 'Madhubani Art', image: '/images/work3.jpg' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Our Services</h1>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Send Us a Message for Custom Orders</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full p-2 bg-yellow-500 text-white rounded-lg"
          >
            Send Message
          </button>
        </form>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Showcase of Our Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <img src={work.image} alt={work.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <button onClick={()=> Navigate('/gallery')} className='bg-yellow-500 p-2 rounded text-white m-2 float-end'>More Works</button>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <div className="text-lg text-gray-700">
          <p><strong>Email:</strong> contact@indianart.com</p>
          <p><strong>Phone:</strong> +91 12345 67890</p>
          <p><strong>Address:</strong> 123 Art Street, Culture City, India</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
