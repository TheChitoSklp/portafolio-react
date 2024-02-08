import React from "react";
import portafolio from "/thumbnail-project-1-small.webp";
import eLearning from "/thumbnail-project-2-small.webp";
import todoWebApp from "/thumbnail-project-3-small.webp";
import entertainment from "/thumbnail-project-4-small.webp";
import memoryGame from "/thumbnail-project-5-small.webp";
import artGalery from "/thumbnail-project-6-small.webp";
export const Projects = () => {
  return (
    <>
      <section className="section-projects"></section>
      <div className="headers-projects">
        <h2>Projects</h2>
        <a href="#contact">CONTACT ME</a>
      </div>
      <div className="projects-container">
        <div className="project">
          <img src={portafolio} alt="" />
          <h4>DESIGN PORTFOLIO</h4>
          <span>HTML</span>
          <span>CSS</span>
        </div>
        <div className="project">
          <img src={eLearning} alt="" />
          <h4>E-LEARNING LANDING PAGE</h4>
          <span>HTML</span>
          <span>CSS</span>
        </div>
        <div className="project">
          <img src={todoWebApp} alt="" />
          <h4>TODO WEB APP</h4>
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
        </div>
        <div className="project">
          <img src={entertainment} alt="" />
          <h4>ENTERTAINMENT WEB APP</h4>
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
        </div>
        <div className="project">
          <img src={memoryGame} alt="" />
          <h4>MEMORY GAME</h4>
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
        </div>
        <div className="project">
          <img src={artGalery} alt="" />
          <h4>ART GALLERY SHOWCASE</h4>
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
        </div>
      </div>
    </>
  );
};
