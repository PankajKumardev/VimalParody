import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 right-0 z-50 max-w-7xl mx-auto py-4 px-4 flex justify-between items-center" id="home">
      <Link href="/">
        <h1 className="text-3xl font-extrabold text-orange-600 tracking-tighter">
         Vimal
        </h1>
      </Link>
      <div className="flex items-center gap-4">
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
    </nav>
  );
};

export default Navbar;