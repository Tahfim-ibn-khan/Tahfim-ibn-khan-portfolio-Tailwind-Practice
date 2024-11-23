import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import ResponsiveMenuBar from "./ResponsiveMenuBar";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
        <div className="container flex py-2 justify-between items-center">
          <div className="font-sans text-2xl">TAHFIM</div>
          <div className="space-x-6 hidden md:block">
            <a href="#Hero" className="hover:text-gray-400">
              Home
            </a>
            <a href="#About" className="hover:text-gray-400">
              About Me
            </a>
            <a href="#Services" className="hover:text-gray-400">
              Services
            </a>
            <a href="#Projects" className="hover:text-gray-400">
              Projects
            </a>
            <a href="#Contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>
          <button className="bg-gradient-to-t from-green-50 to-blue-500 hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Contact Me
          </button>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <CiMenuBurger />
          </button>
        </div>
      </nav>
      <ResponsiveMenuBar open={open} />
    </div>
  );
}

export default Navbar;
