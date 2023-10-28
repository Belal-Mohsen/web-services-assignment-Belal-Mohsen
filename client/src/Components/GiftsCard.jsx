import React from 'react'
import {IoMdAddCircle} from 'react-icons/io';

const GiftsCard = ({gift, onAddToCart}) => {
  return (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-64 h-full">
  <img
    src={gift.image}
    alt={gift.name}
    className="w-full h-32 object-cover"
  />
  <div className="p-4">
    <h2 className="text-xl font-bold text-gray-800">{gift.name}</h2>
    <p className="text-sm text-gray-600">{gift.description}</p>
    <p className="text-sm font-semibold text-gray-600">Price: $ {gift.price}</p>
    <button onClick={() => onAddToCart(gift)} className="absolute bottom-3 right-3 p-2 rounded-full text-black">
        <IoMdAddCircle size={28}/>
      </button>
  </div>
</div>
  );
};

export default GiftsCard