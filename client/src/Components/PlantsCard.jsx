import React from 'react';
import {IoMdAddCircle} from 'react-icons/io';

const PlantsCard = ({plant, onAddToCart}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-64 h-full">
      <img
        src={plant.default_image.original_url}
        alt={plant.common_name}
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{plant.common_name}</h2>
        <p className="text-sm  text-gray-600"><span className='font-semibold inline-block'>Scientific Name:</span> {plant.scientific_name}</p>
        <p className="text-sm text-gray-600"><span className='font-semibold inline-block'>Cycle:</span> {plant.cycle}</p>
        <p className="text-sm text-gray-600"><span className='font-semibold inline-block'>Watering:</span> {plant.watering}</p>
        <button onClick={() => onAddToCart(plant)} className="absolute bottom-3 right-3 p-2 rounded-full text-black">
        <IoMdAddCircle size={28}/>
      </button>
      </div>
    </div>
  );
};
  

export default PlantsCard