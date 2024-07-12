import React from 'react'
import Navbar from './Navbar'
import InfiniteCarousel from './Carousel/Carousel'
import FeaturedSection from './Featured'

function Home() {
  return (
    <div>
        <InfiniteCarousel/>

        <div className="bg-cover bg-center m-12 flex items-center justify-center" style={{ backgroundImage: "url('/path-to-hero-image.jpg')" }}>
          <div className="text-center">
            <h1 className="text-5xl font-bold">Sri Ranga Tanjore Art Gallery</h1>
            <p className="mt-4 text-xl">Celebrating a Legacy of Artistic Excellence</p>
            <div className="mt-8">
              <a href="/gallery" className="px-8 py-3 bg-yellow-500 text-lg rounded-lg">Explore Gallery</a>
              <a href="/contact" className="ml-4 px-8 py-3 bg-transparent border border-white text-lg rounded-lg">Contact Us</a>
            </div>
          </div>
        </div>  

        <div className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold mb-8">About Sri Ranga Tanjore Art Gallery</h2>
          <p className="text-gray-700 mb-4">
            Founded by the esteemed Thiru L. Ramanujam, our gallery stands as a beacon of Tanjore Painting's rich heritage, admired and recognized by art enthusiasts worldwide.
          </p>
          <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4">About the Founder: Dr. L.</h3>
                <p className="text-gray-700">
                  Dr. L., a native of Srirangam in Trichy District, is celebrated for his exquisite Tanjore Paintings. With over 60 years of mastery, he has devoted his life to this traditional art form, creating works that resonate with beauty and cultural significance.
                </p>
                <ul className="mt-4 list-disc list-inside text-gray-700">
                  <li>Vaazhum Kaivinai Pokkisham (Living Legend)</li>
                  <li>Raja Kalaignan Virudhu</li>
                  <li>Kalai Mudhumani</li>
                  <li>Tanjore Art Best Kala Ratna National Award</li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Leadership: Mrs. R.</h3>
                <p className="text-gray-700">
                  Mrs. R., the Managing Director of Sri Ranga Tanjore Art Gallery, has seamlessly carried forward her father’s legacy. Under her leadership, the gallery has flourished, preserving the rich heritage of Tanjore Art and extending its reach globally.
                </p>
                <ul className="mt-4 list-disc list-inside text-gray-700">
                  <li>Raja Kalaignan Lifetime Achievement Award (2014)</li>
                  <li>Reviving Heritage through contemporary methods</li>
                  <li>Empowering Women through Tanjore Painting</li>
                  <li>Cultural Connections with prestigious exhibitions</li>
                </ul>
              </div>
            </div>
          </div>

          <FeaturedSection/>


    </div>
  )
}

export default Home