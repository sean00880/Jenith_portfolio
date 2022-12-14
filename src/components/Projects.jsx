/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "2D Endless Runner",
      img: "/Jenith_portfolio/projects/2.png",
      gLink: "https://github.com/",
      lLink: "/",
    },
    {
      title: "Portfolio Website",
      img: "/Jenith_portfolio/projects/2.png",
      gLink: "https://sean00880.github.com/Jenith_portfolio/",
      lLink: "/",
    },

  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
                This project was created using React JS and was deployed with the help of Github Pages. 
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
