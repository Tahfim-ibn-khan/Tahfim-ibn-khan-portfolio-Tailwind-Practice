import React from 'react'


const services = [
    {
      id: 1,
      title: "Web Design",
      description: "Creating visually appealing and user-friendly web designs."
    },
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
      id: 6,
      title: "Digital Marketing",
      description: "Boosting online presence through SEO, social media, and targeted advertising."
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

                    </div>
                ))}
            </div>
        </div>
    </div> 
  )
}

export default Services