import React from 'react';
import Marquee from 'react-fast-marquee';
import 'tailwindcss/tailwind.css';

const AboutPage = () => {
  const achievements = [
    {
      title: 'National Award',
      description: 'Received the prestigious National Award for our outstanding contributions to traditional Indian art.',
    },
    {
      title: 'International Exhibition',
      description: 'Participated in the International Art Expo and showcased our unique artworks to a global audience.',
    },
    {
      title: 'Cultural Heritage Preservation',
      description: 'Recognized for our efforts in preserving and promoting cultural heritage through art.',
    },
  ];

  const history = `
    Our journey began over three decades ago, rooted in the rich traditions of Indian art. 
    We have dedicated ourselves to preserving and promoting traditional art forms, 
    bringing them to the modern world while maintaining their authentic essence. 
    Our passion for art drives us to create masterpieces that reflect the cultural heritage of India.
  `;

  const images = [
    '/images/art1.jpg',
    '/images/art2.jpg',
    '/images/art3.jpg',
    '/images/art4.jpg',
    '/images/art5.jpg',
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">About Us</h1>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our History</h2>
        <p className="text-lg text-gray-700">{history}</p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Achievements</h2>
        <ul className="space-y-4">
          {achievements.map((achievement, index) => (
            <li key={index} className="border border-gray-200 p-4 rounded-lg shadow-sm bg-white">
              <h3 className="text-2xl font-semibold text-gray-900">{achievement.title}</h3>
              <p className="text-lg text-gray-700">{achievement.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Gallery</h2>
        <div className="overflow-hidden">
          <Marquee gradient={false} speed={50}>
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Art ${index + 1}`}
                className="w-64 h-64 object-cover mx-2 rounded-lg shadow-md"
              />
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
