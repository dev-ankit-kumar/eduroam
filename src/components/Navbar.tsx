'use client';

import React, { useState } from 'react';
import { Moon, Sun, LayoutGrid, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-orange-400 via-white to-green-600 p-4 flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-900 text-white font-bold rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center border-4 border-orange-300 text-lg">
            IN
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-blue-900">eduroam India</h1>
            <p className="text-gray-700 text-sm md:text-base font-medium">
              Department of Electronics & Information Technology | Ministry of Communications & IT | Government of India
            </p>
          </div>
        </div>

        {/* Buttons: A+, A-, Theme Toggle, Layout */}
        <div className="flex items-center space-x-2">
          <button className="bg-blue-900 text-white px-3 py-1 rounded text-sm">A+</button>
          <button className="bg-blue-900 text-white px-3 py-1 rounded text-sm">A-</button>
          <div className="flex bg-gradient-to-r from-gray-900 to-purple-400 px-2 py-1 rounded items-center">
            <Moon className="text-white" size={16} />
            <Sun className="text-white ml-1" size={16} />
          </div>
          <button className="bg-blue-900 text-white p-2 rounded hidden sm:block">
            <LayoutGrid size={16} />
          </button>
          <button className="md:hidden text-blue-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-blue-900 text-white px-6 py-2">
        <ul className={`md:flex md:space-x-8 text-sm font-medium ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <li className="hover:underline py-2 md:py-0 cursor-pointer">Home</li>
          <li className="hover:underline py-2 md:py-0 cursor-pointer">About eduroam</li>
          <li className="hover:underline py-2 md:py-0 cursor-pointer">Participating Institutions</li>
          <li className="hover:underline py-2 md:py-0 cursor-pointer">Configuration</li>
          <li className="hover:underline py-2 md:py-0 cursor-pointer">Support</li>
          <li className="hover:underline py-2 md:py-0 cursor-pointer">Downloads</li>
          <li className="hover:underline py-2 md:py-0 cursor-pointer">Policies</li>
          <li className="hover:underline py-2 md:py-0 cursor-pointer">Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
