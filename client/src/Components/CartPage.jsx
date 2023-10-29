import React from 'react';

const CartPage = ({ cart, removeFromCart, clearCart, checkout }) => {
  return (
    <div className="min-h-screen container mx-auto p-4">
      <h1 className="text-2xl font-semibold pb-5">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="flex items-center mb-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>${item.price}</p>
                <button
                  onClick={() => removeFromCart(item)}
                  className="text-red-500 hover:underline cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex items-center mt-4">
            <button onClick={clearCart} className="py-2 px-4 rounded-lg text-white bg-red-500 cursor-pointer mr-6">
              Clear Cart
            </button>
            <button onClick={checkout} className=" text-white bg-black py-2 px-4 rounded-lg">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
