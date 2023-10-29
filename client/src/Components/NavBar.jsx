import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsList, BsX } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

const NavBar = ({ cart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center sticky top-0 shadow-lg z-10">
      <div className="flex items-center">
        {!isMenuOpen && (
          <h2 className="text-xl font-semibold">Gift Shop</h2>
        )}
      </div>
      <ul className={`space-x-4  hidden md:flex`}>
        <li><a href="/" className="text-gray-800 px-2 hover:text-blue-500">Home</a></li>
        <li><a href="/products" className="text-gray-800 px-2 hover:text-blue-500">Products</a></li>
        <li><a href="/about" className="text-gray-800 px-2 hover:text-blue-500">About Us</a></li>
        <li><a href="/contact" className="text-gray-800 px-2 hover:text-blue-500">Contact Us</a></li>
        <li className="px-2 relative group" onClick={toggleMenu}>
          <Link to="/cart">
            <FiShoppingCart size={30} />
            <div className="text-sm text-red-700 font-semibold absolute top-0 right-0 -mt-1 -mr-1">
              {cart.length}
            </div>
          </Link>
        </li>
      </ul>


      <div
        className={
          isMenuOpen
            ? "md:hidden flex flex-col w-full bg-gray-100"
            : "md:hidden flex flex-col bg-gray-100"
        }
      >

        <div className='flex items-start'>
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 hover:text-blue-500 text-4xl"
          >
            {isMenuOpen ? <BsX /> : <BsList />}
          </button>
        </div>
        <div>
          {isMenuOpen && (
            <div>
              <ul className=" flex flex-col justify-center items-center bg-gray-100">
                <li className='pt-2'><a href="/" className="text-gray-800 hover:text-blue-500">Home</a></li>
                <li className='pt-2'><a href="/products" className="text-gray-800 hover:text-blue-500">Products</a></li>
                <li className='pt-2'><a href="/about" className="text-gray-800 hover:text-blue-500">About Us</a></li>
                <li className='pt-2'><a href="/contact" className="text-gray-800 hover:text-blue-500">Contact Us</a></li>

              </ul>
              <div className='w-full'>
                <Link to="/cart">
                  <FiShoppingCart className='absolute top-5 right-2' size={30} />
                  <div className="text-sm text-red-700 font-semibold absolute top-3 right-2 -mt-1 -mr-1">
                    {cart.length}
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>



      </div>
    </nav>
  );
};

export default NavBar;
