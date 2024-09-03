import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-section" id="about-me">
      {/* About Me Section */}
      <section>
        <h2>About Me</h2>
        <p>
          I am a dedicated and passionate individual with a background in Civil
          Engineering and a keen interest in software development. My journey
          has taken me from engineering projects to gaining skills in full-stack
          development, with certifications in JavaScript and MERN stack.
        </p>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2>Education</h2>
        <div className="horizontal-cards">
          <div className="card">
            <p>B.E Civil Engineering, RV College of Engineering, Bangalore</p>
          </div>
          <div className="card">
            <p>Pre University, Expert Pre-University College, Mangalore</p>
          </div>
          <div className="card">
            <p>Matriculation, Appa Public School, Gulbarga</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2>Experience</h2>
        <div className="horizontal-cards">
          <div className="card">
            <p>
              Project Coordinator Intern at Kingrose Constructions,Bangalore
            </p>
          </div>
          <div className="card">
            <p>Intern at Byju's,Bangalore</p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications">
        <h2>Certifications</h2>
        <div className="horizontal-cards">
          <div className="card">
            <p>JavaScript Certification</p>
            <a href="/src/assets/JS.png" download className="download-link">
              Download
            </a>
          </div>
          <div className="card">
            <p>MERN Stack Certification</p>
            <a href="/src/assets/MERN.png" download className="download-link">
              Download
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
