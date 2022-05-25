import React from 'react'
import CTA from './CTA'
import './Header.css'
import HeaderSocials from './HeaderSocials'



const Header = () => {
  return (
    <section id = "#">
      <header>
      <div className="container header_container" id = "header">
      <h5>Hello I am </h5>
      <h1>Nishchay Bhatt</h1>
      <h5 className="text-light">FullStack Developer</h5>
      <CTA/>
      </div>
      
      <a href="#contact" className="left-scroll">Scroll Down</a>
      <HeaderSocials/>
      
    </header>
    </section>
    
  )
}

export default Header