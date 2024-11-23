import React from 'react'
import contact from '../assets/images/contact.avif'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <div className='bg-black text-white py-20' id='Contact'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Contact me</h2>
            <div className='flex flex-col mx-auto md:flex-row md:space-x-12'>
            <div className='flex-1'>
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-purple-700 mb-4'>Lets Talk</h3>
            <p>I am open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-4'>
              <FaEnvelope className='inline-block text-yellow-500 mr-2'></FaEnvelope>
              <a href="mailto:yourexample@example.com" className='hover:underline'>
                yourexample@example.com
              </a>
            </div>

            <div className='mb-4'>
              <FaPhone className='inline-block text-yellow-500 mr-2'></FaPhone>
              <span>01751707829</span>
            </div>

            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-yellow-500 mr-2'></FaMapMarkedAlt>
              <span>Street, city etc</span>
            </div>
            </div>
            <div className='flex-1 w-full'>
              <form className='space-y-4'>
                <div>
                  <label htmlFor="name" className='block mb-2'>Your Name</label>
                  <input type='text'
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-500'
                  placeholder='Enter your name'
                  />
                </div>
                <div>
                  <label htmlFor="email" className='block mb-2'>Email</label>
                  <input type='text'
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-500'
                  placeholder='Enter your Email'
                  />
                </div>
                <div>
                  <label htmlFor="message" className='block mb-2'>Message</label>
                  <textarea type='text'
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-500'
                  rows="5"
                  placeholder='Enter your Message'
                  />
                </div>
                <button className='bg-gradient-to-t from-yellow-500 to-purple-700 hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
              </form>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Contact