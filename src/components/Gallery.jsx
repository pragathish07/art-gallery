import React from 'react'


const paintings = [
    {
        id: 1,
        title: 'Krishna',
        description: 'Krishna playing flute',
        price: 5000,
        image: 'https://via.placeholder.com/600x300',
    },
    {
        id: 2,
        title: 'Ganesha',
        description: 'Ganesha in a sitting posture',
        price: 4000,
        image: 'https://via.placeholder.com/600x300',
    },
    {
        id: 3,
        title: 'Saraswathi',
        description: 'Saraswathi with Veena',
        price: 6000,
        image: 'https://via.placeholder.com/600x300',
    },
    {
        id: 4,
        title: 'Radha Krishna',
        description: 'Radha Krishna playing flute',
        price: 7000,
        image: 'https://via.placeholder.com/600x300',
    },
    {
        id: 5,
        title: 'Shiva',
        description: 'Shiva in a meditative posture',
        price: 8000,
        image: 'https://via.placeholder.com/600x300',
    },
    {
        id: 6,
        title: 'Durga',
        description: 'Durga in a sitting posture',
        price: 9000,
        image: 'https://via.placeholder.com/600x300',
    },
];

function Gallery() {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {paintings.map(painting => (
        <div key={painting.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={painting.image} alt={painting.title} className="w-full h-56 object-cover"/>
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
  )
}

export default Gallery