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
        <h2 className="text-2xl font-bold text-gray-800">Common Name: {plant.common_name}</h2>
        <p className="text-sm text-gray-600">Scientific Name: {plant.scientific_name}</p>
        <p className="text-sm text-gray-600">Cycle: {plant.cycle}</p>
        <p className="text-sm text-gray-600">Watering: {plant.watering}</p>
      </div>
    </div>
  );
};
  

export default PlantsCard