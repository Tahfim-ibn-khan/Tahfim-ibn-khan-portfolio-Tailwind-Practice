import React from 'react'
import projectImg from '../assets/images/projects.avif'
const projects = [
    {
      id: 1,
      name: "Employee Management System",
      technologies: "MERN Stack",
      image: projectImg,
      github: "https://github.com/YouafKhan/EmployeeMS"
    },
    {
      id: 2,
      name: "Blog App",
      technologies: "MERN Stack",
      image: projectImg,
      github: "https://github.com/YouafKhan/BlogApp"
    },
    {
      id: 3,
      name: "E-commerce Platform",
      technologies: "React, Node.js, Express, MongoDB",
      image: projectImg,
      github: "https://github.com/YouafKhan/EcommercePlatform"
    },
    {
      id: 4,
      name: "Portfolio Website",
      technologies: "HTML, CSS, JavaScript",
      image: projectImg,
      github: "https://github.com/YouafKhan/Portfolio"
    },
    {
      id: 5,
      name: "Task Tracker App",
      technologies: "Vue.js, Firebase",
      image: projectImg,
      github: "https://github.com/YouafKhan/TaskTracker"
    },
    {
      id: 6,
      name: "Social Media Dashboard",
      technologies: "MERN Stack",
      image: projectImg,
      github: "https://github.com/YouafKhan/SocialMediaDashboard"
    }
  ];
  

function Projects() {
  return (
    <div className='bg-black text-white py-20' id='Projects'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>My projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project)=>(
                // eslint-disable-next-line react/jsx-key
                <div className='bg-gray-800 p-6 rounded-lg hover:shadow-lg trasform transition-transform duration-300 hover:scale-105'>
                    <img src={project.image} alt="project img" className='rounded-lg mb-4 w-full h-48 object-cover'/>
                    <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                    <p className='text-gray-400 mb-4'>{project.technologies}</p>
                    <a href={project.github} className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full'>Github</a>
                </div>
            ))}
            </div>
            </div>
        </div>
  )
}

export default Projects