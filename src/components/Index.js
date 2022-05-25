import React from 'react'
import Header from './Header/Header';
import About from './About/About';
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Project from './Project/Project';
import Service from './Service/Service';



const Index = () => {
  return (
    <div>
        <Header/>
        <Navbar />
        <About />
        <Service/>
        <Project />
        <Contact />
        <Footer />
    </div>
  )
}

export default Index