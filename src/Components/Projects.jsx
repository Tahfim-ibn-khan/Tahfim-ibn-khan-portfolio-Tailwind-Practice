import React from 'react'
import projectImg from '../assets/images/projects.avif'
import audioConverter from '../assets/images/audioConverter.png'
import portfolio from '../assets/images/portfolio.png'
import freshBasket from '../assets/images/freshBasket.png'
import dairyDirectCustomer from '../assets/images/dairyDirectCustomer.png'
import dairyDirectAdmin from '../assets/images/dairyDirectAdmin.png'
import cox from '../assets/images/cox.png'
import aiubSynapse from '../assets/images/aiubSynapse.png'
import microProject from '../assets/images/microProject.png'


const projects = [
    {
      id: 1,
      name: "FreshBasket:An Organic Market Place",
      technologies: "NEST-NEXT Full-Stack",
      image: freshBasket,
      github: "https://freshbasket-frontend.vercel.app/"
    },
    {
      id: 2,
      name: "DairyDirect: Customer Panel",
      technologies: "PHP, JavaScript, MySQL, HTML, CSS, Bootstrap",
      image: dairyDirectCustomer,
      github: "http://dairy-direct-admin-tahfim.wuaze.com/Customer/MVC/Views/home.php"
    },
    {
      id: 3,
      name: "DairyDirect: Admin Panel",
      technologies: "PHP, JavaScript, MySQL, HTML, CSS, Bootstrap",
      image: dairyDirectAdmin,
      github: "http://dairy-direct-admin-tahfim.wuaze.com/Admin/MVC/Views/admin_login.php"
    },
    {
      id: 4,
      name: "Inventory Management System API",
      technologies: "Node.js, Express.js, MongoDB, JWT, Mongoose, Git, Postman",
      image: projectImg,
      github: "https://github.com/Tahfim-ibn-khan/Inventory-Management-System-API-Development"
    },
    {
      id: 5,
      name: "AIUB SYNAPSE",
      technologies: "C#, Winforms, MSSQL",
      image: aiubSynapse,
      github: "https://github.com/Tahfim-ibn-khan/AIUB-SYNAPSE"
    },
    {
      id: 6,
      name: "PDF TO Audio",
      technologies: "NodeJs, Javascript, HTML, CSS, Bootstrap",
      image: audioConverter,
      github: "https://tahfimsaudioconverter.netlify.app/"
    },
    {
      id: 7,
      name: "CoxsBazarRailwayStation",
      technologies: "Computer Graphics, c++",
      image: cox,
      github: "https://github.com/Tahfim-ibn-khan/CG_Project_coxsBazarRailwayStation"
    },
    {
      id: 8,
      name: "Portfolio Website",
      technologies: "React, TailwindCss",
      image: portfolio,
      github: "https://github.com/Tahfim-ibn-khan/Tahfim-ibn-khan-portfolio-Tailwind-Practice"
    },
    {
      id: 9,
      name: "Micro Processor Project",
      technologies: "Arduino",
      image: microProject,
      github: "https://github.com/Tahfim-ibn-khan/Tahfim-ibn-khan-portfolio-Tailwind-Practice"
    },
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
                    <a href={project.github} className='inline-block bg-gradient-to-r from-yellow-500 to-purple-700 text-white px-4 py-2 rounded-full'>LINK</a>
                </div>
            ))}
            </div>
            </div>
        </div>
  )
}

export default Projects