import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      {/* Floating Elements */}
      <div className="floating"></div>
      <div className="floating"></div>
      <div className="floating"></div>

      {/* Hero Content */}
      <h1 className="hero-title">
        <span>I am Rohit V Patil</span>
      </h1>
      <p className="hero-description">
        I recently completed my B.E. in Civil Engineering and am now diving into
        the world of front-end development. With a solid foundation in HTML,
        CSS, JavaScript, and modern frameworks, I’m passionate about creating
        visually appealing and user-friendly web experiences.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href="src/assets/Rohit's Resume.pdf"
            className="resume-link"
            target="_blank"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
