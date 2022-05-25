import React from "react";
import { BiBadgeCheck  } from "react-icons/bi";
import "./Service.css";

const Service = () => {
  return (
    <section id="service">
      <h5>what Skills I have</h5>
      <h2>My Services</h2>

      <div className="container service_container">
        <div className="service_frontend">
          <h3>Frontend Development</h3>
          <div>
          <div className="sercive_content">
            <article className="service_details">
              <BiBadgeCheck className="service_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Expereinced</small>
              </div>
            </article>
          </div>
          <div className="sercive_content">
            <article className="service_details">
              <BiBadgeCheck className="service_details_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
          <div className="sercive_content">
            <article className="service_details">
              <BiBadgeCheck className="service_details_icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Expereinced</small>
              </div>
            </article>
          </div>
          <div className="sercive_content">
            <article className="service_details">
              <BiBadgeCheck className="service_details_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            
          </div>
          <div className="sercive_content">
            <article className="service_details">
              <BiBadgeCheck className="service_details_icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
          <div className="sercive_content">
            <article className="service_details">
              <BiBadgeCheck className="service_details_icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Expereinced</small>
              </div>
            </article>
          </div>
          <div className="sercive_content">
            <article className="service_details">
              <BiBadgeCheck className="service_details_icon" />
              <div>
                <h4>Nextjs</h4>
                <small className="text-light">Expereinced</small>
              </div>
            </article>
          </div>
          </div>
        </div>
        {/* This is the backend part  */}
        <div className="service_backend">
          <h3>Backend Development</h3>
          <div>
          <div className="sercive_content">
            <article className="service_details">
              <BiBadgeCheck className="service_details_icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
          <div className="sercive_content">
            <article className="service_details">
              <BiBadgeCheck className="service_details_icon" />
              <div>
                <h4>MySql</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
          <div className="sercive_content">
            <article className="service_details">
              <BiBadgeCheck className="service_details_icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Expereinced</small>
              </div>
            </article>
          </div>
          <div className="sercive_content">
            <article className="service_details">
              <BiBadgeCheck className="service_details_icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
          <div className="sercive_content">
            <article className="service_details">
              <BiBadgeCheck className="service_details_icon" />
              <div>
                <h4>Nodejs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
          <div className="sercive_content">
            <article className="service_details">
              <BiBadgeCheck className="service_details_icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Itermediate</small>
              </div>
            </article>
          </div>
          <div className="sercive_content">
            <article className="service_details">
              <BiBadgeCheck className="service_details_icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
