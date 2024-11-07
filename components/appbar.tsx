"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import Menu from "../app/assets/menu.png";
import Cross from "../app/assets/close.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState  (false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 right-0 z-50 max-w-7xl mx-auto py-4 px-4 flex justify-between items-center" id="home">
      <Link href="/">
        <h1 className="md:text-3xl text-2xl font-extrabold text-orange-600 tracking-tighter">
         Vimal
        </h1>
      </Link>
      <div className="invisible md:visible flex items-center gap-4 ">
        <Link
          href="#home"
          className="text-orange-950 font-medium tracking-tight hover:text-orange-900 transition-all duration-300"
        >
        Home
        </Link>

        <Link
          href="#products"
          className="text-orange-950 font-medium tracking-tight hover:text-orange-900 transition-all duration-300"
        >
        Products
        </Link>

        <button className="bg-orange-500 text-white font-base px-3 py-1 hover:bg-orange-600 transition-all duration-300 rounded-2xl">
          Buy Now
        </button>
      </div>
      <div className="md:hidden flex items-center" onClick={toggleMenu}>
        <Image src={isMenuOpen? Cross : Menu } alt="Menu" width={20} height={20} />
      </div>

      {isMenuOpen && (
        <div className="md:hidden w-full flex flex-col justify-center items-center gap-4 absolute top-16 left-0 right-0 bg-white p-4 rounded-lg shadow-md z-10 transition-all duration-200 ease-in-out transform">
          <Link
            href="#home"
            className="text-orange-950 font-medium tracking-tight hover:text-orange-900 transition-all duration-300"
            onClick={toggleMenu}  
          >
            Home
          </Link>

          <Link
            href="#products"
            className="text-orange-950 font-medium tracking-tight hover:text-orange-900 transition-all duration-300"
            onClick={toggleMenu}  
          >
            Products
          </Link>

          <button
            className="bg-orange-500 text-white font-base px-3 py-1 hover:bg-orange-600 transition-all duration-300 rounded-2xl"
            onClick={toggleMenu}  
          >
            Buy Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;