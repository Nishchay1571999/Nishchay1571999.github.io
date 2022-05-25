import React from "react";
import "./Navbar.css";
import { BiHomeSmile, BiUser } from "react-icons/bi";
import { SiAboutdotme } from "react-icons/si";
import { GiMaterialsScience } from "react-icons/gi";
import { MdOutlineContactless } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#header"
        onClick={() => {
          setActive("#");
        }}
        className={active === "#" ? "active" : ""}
      >
        <BiHomeSmile />
      </a>
      <a
        href="#aboutme"
        onClick={() => {
          setActive("#aboutme");
        }}
        className={active === "#aboutme" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a
        href="#service"
        onClick={() => {
          setActive("#service");
        }}
        className={active === "#service" ? "active" : ""}
      >
        <RiCustomerService2Line />
      </a>
      <a
        href="#project"
        onClick={() => {
          setActive("#project");
        }}
        className={active === "#project" ? "active" : ""}
      >
        <GiMaterialsScience />
      </a>
      
      <a
        href="#contact"
        onClick={() => {
          setActive("#contact");
        }}
        className={active === "#contact" ? "active" : ""}
      >
        <MdOutlineContactless />
      </a>
    </nav>
  );
};

export default Navbar;
