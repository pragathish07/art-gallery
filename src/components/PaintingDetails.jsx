import { useParams } from 'react-router-dom';
import paintings from '../data/paintings'

const PaintingDetails = () => {
  const { id } = useParams();
  const painting = paintings.find(p => p.id === id);

  if (!painting) {
    return <div>Painting not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2">
          <img src={painting.image} alt={painting.title} className="w-full h-auto rounded-lg shadow-lg"/>
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{painting.title}</h1>
          <p className="text-gray-700 mb-4">{painting.description}</p>
          <p className="text-gray-900 font-semibold">Size: {painting.size}</p>
          <p className="text-gray-900 font-semibold">Price: ₹{painting.price}</p>
{/*           <p className="text-gray-900 font-semibold">Artist: {painting.artist}</p>
 */}          
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Customize Your Painting</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Custom Size</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Design Preferences</label>
                <textarea className="w-full p-2 border border-gray-300 rounded-lg" rows="4"></textarea>
              </div>
              <button type="submit" className="w-full p-2 bg-yellow-500 text-white rounded-lg">Submit Customization</button>
            </form>
          </div>

          <div className="mt-6">
            <button className="w-full p-3 bg-yellow-500 text-white rounded-lg">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Paintings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paintings.filter(p => p.id !== painting.id).slice(0, 3).map(relatedPainting => (
            <div key={relatedPainting.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={relatedPainting.image} alt={relatedPainting.title} className="w-full h-56 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{relatedPainting.title}</h3>
                <p className="mt-2 text-gray-600">{relatedPainting.description}</p>
                <p className="mt-2 text-gray-800 font-bold">₹{relatedPainting.price}</p>
                <a href={`/painting/${relatedPainting.id}`} className="mt-4 inline-block text-yellow-500 hover:text-yellow-600">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaintingDetails;
