import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function ResponsiveMenuBar({ open }) {
  return (
    <>
      {open && (
        <div
          className='absolute left-0 w-full py-6 bg-slate-800 text-white z-20 flex flex-col items-center justify-center md:hidden'
        >
          <div className='space-y-4 text-center'>
            <a href="#Hero" className='hover:text-gray-400 block text-lg'>Home</a>
            <a href="#About" className='hover:text-gray-400 block text-lg'>About Me</a>
            <a href="#Services" className='hover:text-gray-400 block text-lg'>Services</a>
            <a href="#Projects" className='hover:text-gray-400 block text-lg'>Projects</a>
            <a href="#Contact" className='hover:text-gray-400 block text-lg'>Contact</a>
          </div>
          <button className='mt-6 bg-gradient-to-t from-yellow-100 to-purple-500 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Contact Me
          </button>
        </div>
      )}
    </>
  );
}

export default ResponsiveMenuBar;
