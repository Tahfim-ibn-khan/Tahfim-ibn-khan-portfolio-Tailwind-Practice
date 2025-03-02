import React from 'react';
import tahfim from '../assets/images/introduction.png';

function AboutMe() {
  return (
    <div className='bg-black text-white py-20' id='About'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        <div className='flex flex-col md:flex-row space-x-9'>
          <img
            src={tahfim}
            alt="developer image"
            className='mx-auto mb-8 md:mb-0 w-72 h-80 md:w-96 md:h-96 rounded object-cover transform transition-transform duration-300 hover:scale-105'
          />
          <div className='flex-1'>
            <p className='text-lg mb-8'>
              I am af ull-stack developer with expertise in ReactJS, Node.js, Express.js, NestJS, MongoDB, and PostgreSQL. 
              With hands-on experience in AI, cloud computing, and automation, I specialize in developing scalable, 
              efficient, and secure web applications. Currently pursuing my BSc in CSE at AIUB, I have received the Dean’s Awardtwice for academic excellence. I have worked on e-commerce platforms, inventory management systems, SaaS applications, and AI-driven projects.
            </p>

            <h3 className='text-2xl font-semibold text-yellow-400 mb-4'>Technical Skills</h3>
            <div className='space-y-4'>
              <div className='flex items-center'>
                <label className='w-2/12'>HTML & CSS</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-yellow-500 to-purple-700 h-2.5 rounded-full w-9/12'></div>
                </div>
              </div>
              <div className='flex items-center'>
                <label className='w-2/12'>MERN</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-yellow-500 to-purple-700 h-2.5 rounded-full w-8/12'></div>
                </div>
              </div>
              <div className='flex items-center'>
                <label className='w-2/12'>NestJS</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-yellow-500 to-purple-700 h-2.5 rounded-full w-7/12'></div>
                </div>
              </div>

              {/* Databases */}
              <div className='flex items-center'>
                <label className='w-2/12'>NEXTJs</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-yellow-500 to-purple-700 h-2.5 rounded-full w-7/12'></div>
                </div>
              </div>
              <div className='flex items-center'>
                <label className='w-2/12'>PostgreSQL</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-yellow-500 to-purple-700 h-2.5 rounded-full w-7/12'></div>
                </div>
              </div>
              <div className='flex items-center'>
                <label className='w-2/12'>Git & GitHub</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-yellow-500 to-purple-700 h-2.5 rounded-full w-8/12'></div>
                </div>
              </div>
            </div>

            {/* Experience & Achievements */}
            <div className='flex justify-between md:space-x-6 mt-10'>
              <div className='text-center'>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-purple-700'>0.6+</h3>
                <p>Years of Experience</p>
              </div>
              <div className='text-center'>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-purple-700'>6+</h3>
                <p>Projects Completed</p>
              </div>
              <div className='text-center'>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-purple-700'>1</h3>
                <p>Internships</p>
              </div>
              <div className='text-center'>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-purple-700'>2</h3>
                <p>Dean's Awards</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
