import React from 'react'
import contact from '../assets/images/contact.avif'

function Contact() {
  return (
    <div className='bg-black text-white py-20' id='AboutMe'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Contact me</h2>
            <div className='flex flex-col md:flex-row space-x-9'>
            <img src={contact} alt="Contact image" className='mx-auto md:mt-4 mb-8 md:mb-0 w-72 h-80 md:w-96 md:h-96 rounded object-cover transform transition-transform duration-300 hover:scale-105'/>
            <div className='flex-1'>
<div className="max-w-xl mx-auto px-8 py-6 bg-gray-800 rounded-lg shadow-lg">
  <form>
    <div className="mb-4">
      <label className="block text-white mb-1" htmlFor="name">
        Your Name
      </label>
      <input
        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
        placeholder="Enter your name"
        type="text"
      />
    </div>
    <div className="mb-4">
      <label className="block text-white mb-1" htmlFor="email">
        Your Email
      </label>
      <input
        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
        placeholder="Enter your email"
        name="email"
        id="email"
        type="email"
      />
    </div>
    <div className="mb-4">
      <label className="block text-white mb-1" htmlFor="message">
        Your Message
      </label>
      <textarea
        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
        rows={4}
        placeholder="Enter your message"
        name="message"
        id="message"
        defaultValue={""}
      />
    </div>
    <button
      className="bg-gradient-to-t from-pink-500 to-yellow-500 hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
      type="submit"
    >
      Send Message
    </button>
  </form>
</div>

            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact