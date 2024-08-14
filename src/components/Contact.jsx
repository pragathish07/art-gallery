import React from 'react'

function Contact() {
  return (
    <div className='mt-28 m-8'>
      <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg ">
      <h2 className="text-5xl font-bold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-lg" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-lg" rows="4" required></textarea>
          </div>
          <button type="submit" className="w-full p-2 bg-yellow-500 text-white rounded-lg">Send Message</button>
        </form>
      </div>

    </div>
  )
}

export default Contact