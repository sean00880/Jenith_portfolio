/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/Jenith_portfolio/person.png" alt="" />
          </div>
          <div className="banner-content">
            <h2>Greetings, I'm Jenith Sunkara</h2>
            <h3>A Game Developer</h3>
            <p>
              I have a passion for developing 3D games and static websites and plan on using my experience and drive to serve others in need. Hire me today so we can start working on your next big idea! 
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
