import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
// import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.css"; // Import the CSS file

const App = () => {
  // JavaScript to detect scrolling and add the in-view class
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
          section.classList.add("in-view");
        } else {
          section.classList.remove("in-view");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="section">
        <Hero />
      </div>
      <div className="section">
        <About />
      </div>
      <div className="section">
        <Skills />
      </div>
      {/* <div className="section">
        <Services />
      </div> */}
      <div className="section">
        <MyWork />
      </div>
      <div className="section">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
