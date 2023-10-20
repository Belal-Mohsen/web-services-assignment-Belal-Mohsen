import React from 'react'

const PlantsCard = ({plant}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-64 h-full">
      <img
        src={plant.default_image.original_url}
        alt={plant.common_name}
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{plant.common_name}</h2>
        <p className="text-sm  text-gray-600"><p className='font-semibold inline-block'>Scientific Name:</p> {plant.scientific_name}</p>
        <p className="text-sm text-gray-600"><p className='font-semibold inline-block'>Cycle:</p> {plant.cycle}</p>
        <p className="text-sm text-gray-600"><p className='font-semibold inline-block'>Watering:</p> {plant.watering}</p>
      </div>
    </div>
  );
};
  

export default PlantsCard