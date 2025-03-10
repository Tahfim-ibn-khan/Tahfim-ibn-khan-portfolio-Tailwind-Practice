import React from 'react'


const services = [
    {
      id: 2,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces."
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Developing robust server-side logic and databases."
    },
    {
      id: 4,
      title: "Quality Assurance",
      description: "Ensuring software reliability through rigorous testing processes."
    },
    {
      id: 5,
      title: "E-commerce Solutions",
      description: "Providing comprehensive online store solutions to expand your business."
    },
    {
      "id": 6,
      "title": "Machine Learning",
      "description": "Leveraging machine learning to simplify complex tasks and enhance decision-making."
    },
    {
      "id": 7,
      "title": "Research",
      "description": "Exploring innovative solutions through data-driven research and analysis."
    }    
  ];
  
function Services() {
  return (
    <div className='bg-black text-white py-20' id='Services'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {services.map(service=>(
                    <div key={service.id}
                    className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'
                    >
                        <div className='text-right text-2xl front-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>
                        {service.id}
                        </div>
                        <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-purple-700'>
                            {service.title}
                        </h3>
                        <p className='mt-2 text-gray-300'>
                            {service.description}
                            </p>
                            <a href='#' className='mt-4 initial-block text-gree-400 hover:text-blue-500'>Read More</a>
                    </div>
                ))}
            </div>
        </div>
    </div> 
  )
}

export default Services