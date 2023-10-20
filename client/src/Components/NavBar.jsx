import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center sticky top-0">
      <div className="flex items-center">
        <h2 className="text-xl font-semibold">Gift Shop</h2>
      </div>
      <ul className="space-x-4 flex flex-row">
        <li><a href="/" className="text-gray-800 hover:text-blue-500">Home</a></li>
        <li><a href="/products" className="text-gray-800 hover:text-blue-500">Products</a></li>
        <li><a href="/about" className="text-gray-800 hover:text-blue-500">About Us</a></li>
        <li><a href="/contact" className="text-gray-800 hover:text-blue-500">Contact Us</a></li>
      </ul>
    </nav>
  )
}

export default NavBar