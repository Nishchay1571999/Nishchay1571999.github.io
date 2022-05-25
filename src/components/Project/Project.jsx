import React from "react";
import "./Project.css";
import img1 from "../../assets/medium-clone.png";
import img2 from "../../assets/instagram-clone.png";
import img3 from "../../assets/valcano-map.png";


// valcano-map


const data = [
  {
    id: 1,
    image: img1,
    title: "Medium-clone using NextJS and SanityClient",
    github: "https://github.com/Nishchay1571999/medium-clone",
    description:" with Blog posting liking and commenting features",
    demo: "https://youtu.be/OO6o1Rom_T8",
  },
  {
    id: 2,
    image:img2,
    title: "Instagram Clone using nextjs Tailwindcss",
    description:" with image posting liking and commenting features",
    github: "https://www.github.com/Nishchay15071999",
    demo: "https://instagram-clone-mu-opal.vercel.app",
  },
  {
    id: 3,
    image:img3,
    title: "Volcanoes Data Repesentation on Maps ",
    description:" Volcano data using folium and pandas shown in a HTML format",
    github: "https://github.com/Nishchay1571999/Volcano-data-visualization",
    demo: "https://youtu.be/54_RquQQZ7M",
  }
];

const Project = () => {
  return (
    <section id="project">
      <h5>Recent Works</h5>
      <h2>Projects</h2>
      <div className="container project_container">
        {data.map(({ id, image, title,description, github, demo }) => {
          return (
            <atricle key={id} className="project_item">
              <div className="project_item_image">
                <img src={image} alt={title} />
              </div>
              <div classname="project_item_details">
                <h3>{title} </h3>
                <p>{description}</p>
                <div className="project_item_links">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Demo 
                  </a>
                </div>
              </div>
            </atricle>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
