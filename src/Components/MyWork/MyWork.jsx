import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import ecommerce_img from "../../assets/Cover_page.png";
import portfolio_img from "../../assets/Cover_page_portfolio.png";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="title-box">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="project-cards">
        <div className="project-card">
          <img
            src={ecommerce_img}
            alt="E-commerce Project"
            className="project-image"
          />
          <div className="project-details">
            <h2>E-commerce Website</h2>
            <p>Functional e-commerce site.</p>
            <a
              href="https://github.com/Rohitvpatil27/E-Commerce-Website" // Un-commented and added a sample link
              className="view-project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            src={portfolio_img}
            alt="Portfolio Project"
            className="project-image"
          />
          <div className="project-details">
            <h2>Portfolio</h2>
            <p>
              A modern portfolio showcasing skills, projects, and experience
              with a sleek design.
            </p>
            <a
              href="https://github.com/Rohitvpatil27/Portfolio-Website" // Un-commented and added a sample link
              className="view-project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
