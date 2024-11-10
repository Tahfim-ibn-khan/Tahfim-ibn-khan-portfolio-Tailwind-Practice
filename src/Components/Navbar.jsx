import React from 'react'

function Navbar() {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container flex py-2 justify-center md:justify-between items-center'>
            <div className='font-sans text-2xl hidden md:inline'>TAHFIM</div>
            <div className='space-x-6'>
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#home" className='hover:text-gray-400'>About Me</a>
                <a href="#home" className='hover:text-gray-400'>Services</a>
                <a href="#home" className='hover:text-gray-400'>Projects</a>
                <a href="#home" className='hover:text-gray-400'>Contact</a>
            </div>
            <button className='bg-gradient-to-t from-green-50 to-blue-500 hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>
        </div>
    </nav>
  )
}

export default Navbar