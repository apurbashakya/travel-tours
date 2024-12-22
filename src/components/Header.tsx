"use client"

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-gray-800">
          YourLogo
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-600">
          <a href="#" className="hover:text-gray-800">Home</a>
          <a href="#" className="hover:text-gray-800">About</a>
          <a href="#" className="hover:text-gray-800">Services</a>
          <a href="#" className="hover:text-gray-800">Contact</a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="space-y-4 py-4 px-6 text-gray-600">
            <li>
              <a href="#" className="block hover:text-gray-800">Home</a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-800">About</a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-800">Services</a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-800">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
