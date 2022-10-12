import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "Front-End Website Development",
      desc: "I build Websites with priortiziation on visual appeal as well as functionality and usability.",
      active: false,
    },
    {
      icon: "fa-paintbrush",
      title: "Game Development",
      desc: "As a passionate game developer, I use my expertise in order to build unique 3D games using Unity.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Android App Development",
      desc: "I have knowledge of fullstack Android Development and can address most client needs successfully.",
      active: false,
    },
    {
      icon: "fa-ruler",
      title: "Blog Writing",
      desc: "Content creation (blog writing in particular) is one of my most valuable skills.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services_title">
          <h1>Expertise:</h1>
        </div>
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service activeservice ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              
            </div>
          ))}
        </div>
        <hr />
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>4</h3>
            <p>Years of Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>Development Experience</h4>
              <p>-Android App Development <br/>-Game Development</p>
            </div>
            <div className="portfolio">
              <h4>Freelancer</h4>
              <p>Freelancing Experience in blog content creation & Web development.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
