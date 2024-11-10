import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import AboutMe from '../Components/AboutMe';
import Services from '../Components/Services';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

function Homepage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <AboutMe/>
        <Services/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Homepage