'use client';

import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';

import { Moon, Sun, LayoutGrid, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-orange-400 via-white to-green-600 p-4 flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
        <div className="flex flex-col  space-x-4">
          <div className='flex'>



            <div className=" text-white font-bold w-40 h-14 md:w-26 md:h-16 flex items-center  ">
            <Image src="/ERNET_India_logo.png" alt="eduroam Logo" width={120} height={120} className="" />
          </div>
          <div className="eduroam  md:block">
            <Image src="/eduroam_logo.png" alt="eduroam Logo" width={120} height={120} className="" />
          </div> 

          
          </div> 
          <div>
            {/* <h1 className="text-xl md:text-2xl font-bold text-blue-900">eduroam India</h1> */}
            <p className="text-gray-700 text-sm md:text-base font-medium">
              Ministry of Electronics & Information Technology | Government of India
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
  <li className="hover:underline py-2 md:py-0 cursor-pointer">
    <Link href="/">Home</Link>
  </li>
  <li className="hover:underline py-2 md:py-0 cursor-pointer">
    <Link href="/about">About eduroam</Link>
  </li>
  <li className="hover:underline py-2 md:py-0 cursor-pointer">
    <Link href="/institutions">Indian Presence</Link>
  </li>
  <li className="hover:underline py-2 md:py-0 cursor-pointer">
    <Link href="/configurationPage">Configuration</Link>
  </li>
  <li className="hover:underline py-2 md:py-0 cursor-pointer">
    <Link href="/support">Support</Link>
  </li>
  <li className="hover:underline py-2 md:py-0 cursor-pointer">
    <Link href="/request">Request Form</Link>
  </li>
  <li className="hover:underline py-2 md:py-0 cursor-pointer">
    <Link href="/privacy">Policies</Link>
  </li>
  <li className="hover:underline py-2 md:py-0 cursor-pointer">
    <Link href="/contact_us">Contact Us</Link>
  </li>
</ul>
      </nav>
    </div>
  );
};

export default Navbar;
