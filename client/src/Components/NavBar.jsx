import { useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center sticky top-0">
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
            {isMenuOpen ? <BsX/> : <BsList />}
          </button>
        </div>
        <div>
          {isMenuOpen && (
            <ul className=" flex flex-col justify-center items-center bg-gray-100">
              <li className='pt-2'><a href="/" className="text-gray-800 hover:text-blue-500">Home</a></li>
              <li className='pt-2'><a href="/products" className="text-gray-800 hover:text-blue-500">Products</a></li>
              <li className='pt-2'><a href="/about" className="text-gray-800 hover:text-blue-500">About Us</a></li>
              <li className='pt-2'><a href="/contact" className="text-gray-800 hover:text-blue-500">Contact Us</a></li>
            </ul>
          )}
        </div>

        

      </div>
    </nav>
  );
};

export default NavBar;
