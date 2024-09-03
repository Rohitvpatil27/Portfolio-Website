import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiRedux, SiMongodb, SiExpress } from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-category">
        <h3>Programming Languages</h3>
        <div className="skills-container">
          <div className="card">
            <FaHtml5 className="skill-icon" />
            <div className="skill-info">
              <h2>HTML</h2>
            </div>
            <div className="skill-progress">
              <div className="progress" style={{ width: "65%" }}></div>
            </div>
          </div>
          <div className="card">
            <FaCss3Alt className="skill-icon" />
            <div className="skill-info">
              <h2>CSS</h2>
            </div>
            <div className="skill-progress">
              <div className="progress" style={{ width: "55%" }}></div>
            </div>
          </div>
          <div className="card">
            <FaJsSquare className="skill-icon" />
            <div className="skill-info">
              <h2>JavaScript</h2>
            </div>
            <div className="skill-progress">
              <div className="progress" style={{ width: "55%" }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-category">
        <h3>Libraries / Frameworks</h3>
        <div className="skills-container">
          <div className="card">
            <FaReact className="skill-icon" />
            <div className="skill-info">
              <h2>React</h2>
            </div>
            <div className="skill-progress">
              <div className="progress" style={{ width: "65%" }}></div>
            </div>
          </div>
          <div className="card">
            <SiRedux className="skill-icon" />
            <div className="skill-info">
              <h2>Redux</h2>
            </div>
            <div className="skill-progress">
              <div className="progress" style={{ width: "60%" }}></div>
            </div>
          </div>
          <div className="card">
            <FaNodeJs className="skill-icon" />
            <div className="skill-info">
              <h2>Node.js</h2>
            </div>
            <div className="skill-progress">
              <div className="progress" style={{ width: "60%" }}></div>
            </div>
          </div>

          <div className="card">
            <SiExpress className="skill-icon" />{" "}
            <div className="skill-info">
              <h2>Express</h2>
            </div>
            <div className="skill-progress">
              <div className="progress" style={{ width: "55%" }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-category">
        <h3>Tools / Platforms</h3>
        <div className="skills-container">
          <div className="card">
            <FaGithub className="skill-icon" />
            <div className="skill-info">
              <h2>Github</h2>
            </div>
            <div className="skill-progress">
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-category" id="databases">
        <h3>Databases</h3>
        <div className="skills-container">
          <div className="card">
            <SiMongodb className="skill-icon" />
            <div className="skill-info">
              <h2>MongoDB</h2>
            </div>
            <div className="skill-progress">
              <div className="progress" style={{ width: "60%" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="skills-category">
        <h3>Soft Skills</h3>
        <div className="skills-container">
          <div className="card soft-skill">
            <div className="soft-skill-name">Problem Solving</div>
          </div>
          <div className="card soft-skill">
            <div className="soft-skill-name">Communication</div>
          </div>
          <div className="card soft-skill">
            <div className="soft-skill-name">Teamwork</div>
          </div>
          <div className="card soft-skill">
            <div className="soft-skill-name">Adaptability</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
