import React from 'react'
import tahfim from '../assets/images/introduction.png'
function AboutMe() {
  return (
    <div className='bg-black text-white py-20' id='About'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About me</h2>
            <div className='flex flex-col md:flex-row space-x-9'>
            <img src={tahfim} alt="developer image" className='mx-auto mb-8 md:mb-0 w-72 h-80 md:w-96 md:h-96 rounded object-cover transform transition-transform duration-300 hover:scale-105'/>
            <div className='flex-1'>
            <p className='text-lg mb-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Natus eaque a facilis mollitia, officiis distinctio nam, 
                assumenda quidem velit consectetur aut atque rem adipisci, 
                beatae aspernatur ullam corporis nemo maiores.
            </p>
            <div className='space-y-4'>
                <div className='flex items-center'>
                    <label htmlFor='htmlandcss' className='w-2/12'>HTML & CSS</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-7/12'>

                        </div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <label htmlFor='htmlandcss' className='w-2/12'>React JS</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'>

                        </div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <label htmlFor='htmlandcss' className='w-2/12'>Node Js</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-7/12'>

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between md:space-x-6'>
            <div className='mt-12 justify-between text-center'>
                <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>1+</h3>
                    <p>Years experience</p>
                </div>
            </div>
            <div className='mt-12 justify-between text-center'>
                <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>4+</h3>
                    <p>Projects completed</p>
                </div>
            </div>
            <div className='mt-12 justify-between text-center'>
                <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>10+</h3>
                    <p>Happy clients</p>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe