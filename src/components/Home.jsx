import React from 'react';
import Navbar from './Navbar';
import InfiniteCarousel from './Carousel/Carousel';
import FeaturedSection from './Featured';
import VisitUs from './VisitUs';
import { useState } from 'react';
import '../index.css'



const AboutSection = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (index) => {
    setExpandedItem(index === expandedItem ? null : index);
  };

  return (
    <div className="lg:p-32 bg-[#fcf8ef] p-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 text-c9ab81">ABOUT</h2>
        <h3 className="text-3xl font-semibold mb-4 text-c9ab81">Our Art Gallery</h3>
        <p className="mb-4">
          Mukesh Art Gallery stands as a luminous bastion of support for burgeoning local artists, nurturing their talent and granting them a global stage to unveil their creativity. As India’s premier art destination, we proudly showcase a breathtaking collection of over 15,000 meticulously framed paintings, embodying our founder's unwavering commitment to democratising art access.
        </p>
        <p className="font-bold mb-4">
          With a bold mission to redefine art as an attainable luxury, our gallery has garnered widespread acclaim and accolades, earning glowing reviews on leading platforms such as Google and TripAdvisor.
        </p>
        <p>
          Ranked among the elite top 10 galleries in India and proudly holding the esteemed title of Rajasthan’s foremost art sanctuary, Mukesh Art Gallery continues to radiate as a beacon of artistic brilliance and cultural enrichment. Our journey is woven with a dedication to fostering local talent, making art a universal language, and perpetuating the timeless legacy of creativity for generations to come.
        </p>
      </div>

   

    
      
     
      <h1 className="text-5xl font-bold mb-16 text-center text-c9ab81">WHAT MAKES US</h1>
      <div className="flex flex-col lg:flex-row items-start">
        <div className="w-full lg:w-1/3 pr-4 ml-20">
       
        <h3 className="text-3xl font-semibold mb-4">India's Luxury Art Gallery</h3>
          <div className="mb-4 pt-8 ">
            <button
              className="text-left w-full focus:outline-none"
              onClick={() => toggleItem(0)}
            >
              <h5 className="text-3xl mb-2">Expansive Environment {expandedItem === 0 ? '-' : '+'}</h5>
              {expandedItem === 0 && (
                <p className="ml-4">
                  From framing to 12-colour museum-quality printing, our vertically integrated operations ensure meticulous craftsmanship and attention to detail at every stage. With a team of 150 exceptionally talented artists, we bring visions to life with passion and precision.
                </p>
              )}
            </button>
          </div>

          <div className="mb-4">
            <button
              className="text-left w-full focus:outline-none"
              onClick={() => toggleItem(1)}
            >
              <h5 className="text-3xl mb-2">Diverse Treasures {expandedItem === 1 ? '-' : '+'}</h5>
              {expandedItem === 1 && (
                <p className="ml-4">
                  Our gallery features a rich tapestry of artworks that celebrate the cultural and artistic diversity of India. From traditional to contemporary, each piece is curated with an eye for excellence.
                </p>
              )}
            </button>
          </div>

          <div className="mb-4">
            <button
              className="text-left w-full focus:outline-none"
              onClick={() => toggleItem(2)}
            >
              <h5 className="text-3xl mb-2">Accessible Elegance {expandedItem === 2 ? '-' : '+'}</h5>
              {expandedItem === 2 && (
                <p className="ml-4">
                  We believe that art should be accessible to everyone. Our gallery offers a range of artworks at different price points, ensuring that everyone can own a piece of beauty.
                </p>
              )}
            </button>
          </div>

          <div className="mb-4">
            <button
              className="text-left w-full focus:outline-none"
              onClick={() => toggleItem(3)}
            >
              <h5 className="text-3xl mb-2">Integrated Mastery {expandedItem === 3 ? '-' : '+'}</h5>
              {expandedItem === 3 && (
                <p className="ml-4">
                  Our gallery is not just a showcase of art but a hub of creativity. We offer workshops, art classes, and events that bring artists and art lovers together in a dynamic and inspiring environment.
                </p>
              )}
            </button>
          </div>
        </div>

        <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
          <img src="/src/assets/group1.jpg" alt="Mukesh Art Gallery" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
      </div>
   
  );
};


const AboutTheFounder = () => {
  return (
    <div className="px-4 py-8 md:px-32 md:py-16 bg-[#fcf8ef]">
      <div className="md:float-right md:ml-8 mb-4 md:mb-0 w-full md:w-1/3 lg:w-1/2">
        <img
          src="/src/assets/founder.jpg"
          alt="Dr. L. Ramanujam"
          className="w-[500px] h-[600px] bg-contain rounded-lg shadow-lg"
          style={{ float: 'right', margin: '0 0 1em 1em' }}
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold mb-2 text-c9ab81">Meet</h1>
        <h1 className="text-4xl font-semibold mb-4 text-c9ab81">Our Founder</h1>
        <p className="mb-4">
          Dr. L. Ramanujam, a native of Srirangam in Trichy District, is celebrated for his exquisite Tanjore Paintings. With over 60 years of mastery, he has devoted his life to this traditional art form, creating works that resonate with beauty and cultural significance.
        </p>
        <h3 className="text-2xl text-center font-semibold mb-4">Leadership</h3>
        <p className="mb-4">
          Mrs. R. Lavanya, the Managing Director of Sri Ranga Tanjore Art Gallery, has seamlessly carried forward her father’s legacy. Under her leadership, the gallery has flourished, preserving the rich heritage of Tanjore Art and extending its reach globally.
        </p>
        <h4 className="text-2xl font-semibold mb-2">Recognitions:</h4>
        <p className="mb-4">
          <span className="font-semibold">Raja Kalaignan Lifetime Achievement Award (2014):</span> Presented by the Tamil Nadu Government for her exceptional contributions to the art form.
        </p>
        <h5 className="text-xl font-semibold mb-2">Contributions and Initiatives:</h5>
        <p className="mb-4">
          <span className="text-xl font-semibold">Reviving Heritage:</span> Innovatively reviving traditional art through contemporary methods, such as rangoli floor decorations <span className="font-semibold">featured in "The Hindu."</span>
        </p>
        <p className="mb-4">
          <span className="text-xl font-semibold">Empowering Women:</span> Using Tanjore Painting as a tool for societal change and women's empowerment.
        </p>
        <p className="mb-4">
          <span className="text-xl font-semibold">Cultural Connections:</span> Her artworks have been displayed at the prestigious Ayodhya Ramar Temple, spreading cultural richness.
        </p>
        <p className="mb-4">
          <span className="text-xl font-semibold">Artistic Engagement:</span> Presented a Tanjore Painting at the Dinamalar Editor's Family Function, highlighting her influence in artistic circles.
        </p>
        <p>
          Under Mrs. R. Lavanya's stewardship, the gallery has expanded its services, offering custom orders and delivering artworks and expertise worldwide. Her teachings have crossed borders, with students globally carrying forward the heritage and artistry of Tanjore Painting.
        </p>
      </div>
    </div>
  );
};







const Home = () => {
  return (
    <div className='bg-primary'>
      <Navbar />
      <InfiniteCarousel />
      <AboutSection />
      <AboutTheFounder/>

      <FeaturedSection />
      <VisitUs/>
    </div>
  );
};

export default Home;
