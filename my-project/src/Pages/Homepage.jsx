import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import AboutMe from '../Components/AboutMe';
import Services from '../Components/Services';

function Homepage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <AboutMe/>
        <Services/>
    </div>
  )
}

export default Homepage