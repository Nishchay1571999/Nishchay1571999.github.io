import React from "react";
import { FaAward, FaUserSecret } from "react-icons/fa";
import { VscFolderActive } from "react-icons/vsc";
import "./About.css";
import "../Navbar/Navbar.css";
import myimage from "../../assets/myimage.jpg";

const About = () => {
  return (
    <section id="aboutme">
      <h5>Get to know me</h5>
      <h2>ABOUT ME</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={myimage} alt="My Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className="about_icon" />
              <h5>Expertise</h5>
              <small>MERN Stack</small>
            </div>
            <div className="about_card">
              <FaUserSecret className="about_icon" />
              <h5>Soft Skills</h5>
              <small>Public Speaking</small>
            </div>
            <div className="about_card">
              <VscFolderActive className="about_icon" />
              <h5>Projects</h5>
              <small>10+ projects</small>
            </div>
          </div>
            <div className="contactmedetails">
              <p>
                Hello, I am a full stack developer looking for a job contact me
                if you are looking for one full stack web developer.{" "}
              </p>
              <a href="#contact" className="btn btn-primary">
                Let's talk
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
