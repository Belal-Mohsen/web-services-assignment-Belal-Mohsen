import React from 'react'

const GiftsCard = ({gift}) => {
  return (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-64 h-full">
  <img
    src={gift.image}
    alt={gift.name}
    className="w-full h-32 object-cover"
  />
  <div className="p-4">
    <h2 className="text-2xl font-bold text-gray-800">{gift.name}</h2>
    <p className="text-sm text-gray-600">{gift.description}</p>
    <p className="text-sm text-gray-600">Price: {gift.price}</p>
  </div>
</div>
  );
};

export default GiftsCard