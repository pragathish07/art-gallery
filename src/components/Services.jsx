import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const ServicePage = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-10 px-5 md:px-10 lg:px-20 mt-20">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4">Sri Ranga Tanjore Art Gallery</h1>
          <p className="text-xl md:text-2xl font-semibold">Celebrating a Legacy of Artistic Excellence</p>
        </header>
{/* 
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Leadership: Mrs. R. Lavanya</h2>
          <p className="mb-4">
            Mrs. R. Lavanya, the Managing Director of Sri Ranga Tanjore Art Gallery, has seamlessly carried forward her father’s legacy.
            Under her leadership, the gallery has flourished, preserving the rich heritage of Tanjore Art and extending its reach globally.
          </p>
          <h3 className="text-xl font-semibold mb-2">Recognitions:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Raja Kalaignan Lifetime Achievement Award (2014)</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Contributions and Initiatives:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Reviving Heritage: Innovatively reviving traditional art through contemporary methods.</li>
            <li>Empowering Women: Using Tanjore Painting as a tool for societal change and women's empowerment.</li>
            <li>Cultural Connections: Her artworks have been displayed at the prestigious Ayodhya Ramar Temple.</li>
            <li>Artistic Engagement: Presented a Tanjore Painting at the Dinamalar Editor's Family Function.</li>
          </ul>
          <p>
            Under Mrs. R. Lavanya's stewardship, the gallery has expanded its services, offering custom orders and delivering artworks and expertise worldwide.
            Her teachings have crossed borders, with students globally carrying forward the heritage and artistry of Tanjore Painting.
          </p>
        </section> */}

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold  dark:text-indigo-400 mb-4">Our Offerings</h2>
          <p className="mb-4">
            At Sri Ranga Tanjore Art Gallery, we offer a diverse range of traditional and authentic handmade Tanjore Paintings, meticulously crafted to suit various preferences and spaces. 
            Our collection includes sizes from compact pieces perfect for return gifts to grand paintings that can be the centerpiece of any room. 
            The price of each painting varies based on size, intricacy, and customization options.
          </p>
          <h3 className="text-xl font-semibold mb-2">Painting Sizes and Pricing:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Small Sizes: 10×8 inches, 12×10 inches</li>
            <li>Medium Sizes: 15×12 inches, 18×14 inches, 20×16 inches, 24×18 inches</li>
            <li>Large Sizes: 30×24 inches, 36×24 inches</li>
            <li>Extra-Large Sizes: 4×3 feet, 6×4 feet, 8×4 feet, 8×6 feet</li>
          </ul>
          <p>
            Our pricing reflects the quality and craftsmanship of each piece, with prices ranging from ₹1500 to over ₹3 lakhs, depending on the size and intricacy of the painting.
          </p>
          <h3 className="text-xl font-semibold mb-2">Customization:</h3>
          <p>
            We understand that each space and individual preference is unique. Therefore, we offer customization options to ensure your Tanjore Painting fits perfectly into your desired setting:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Custom Sizes: Available upon request to match your specific requirements.</li>
            <li>Design Preferences: Tailored to include specific themes, colors, or subjects.</li>
            <li>Personalized Gifts: Unique paintings designed for special occasions or return gifts.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold  dark:text-indigo-400 mb-4">Contact Us for Custom Orders</h2>
          <div className="flex items-center mb-4">
            <MdLocationOn className="text-2xl mr-2  dark:text-indigo-400" />
            <p>Sri Ranga Tanjore Art Gallery, 10/2, Annai Complex, Mambazhasalai, Ammamandapam Road, Srirangam, Trichy-6.</p>
          </div>
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-2xl mr-2  dark:text-indigo-400" />
            <p>Call: 9629892768</p>
          </div>
          <p>
            Explore the timeless beauty of Tanjore Paintings in the size and style that suits your needs. Let us help you bring a piece of this magnificent art form into your home.
          </p>
        </section>
        
        <footer className="text-center mt-10">
          <h2 className="text-2xl font-bold  dark:text-indigo-400 mb-4">For Orders and Enquiries:</h2>
          <p className="text-lg mb-2">Sri Ranga Tanjore Art Gallery, 10/2, Annai Complex, Mambazhasalai, Ammamandapam Road, Srirangam, Trichy-6.</p>
          <p className="text-lg mb-2">Call: 9629892768</p>
          <p>Visit us to explore the timeless beauty of Tanjore Paintings and be a part of preserving this magnificent art form.</p>
        </footer>
      </div>
    </div>
  );
};

export default ServicePage;
