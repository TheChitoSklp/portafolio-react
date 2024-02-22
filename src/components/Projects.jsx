import "./Projects.css";
import { Viewcode } from "./Viewcode";
import { ViewcodeFullScreen } from "./ViewcodeFullScreen";
import portafolio from "/thumbnail-project-1-small.webp";
import eLearning from "/thumbnail-project-2-small.webp";
import todoWebApp from "/thumbnail-project-3-small.webp";
import entertainment from "/thumbnail-project-4-small.webp";
import memoryGame from "/thumbnail-project-5-small.webp";
import artGalery from "/thumbnail-project-6-small.webp";

export const Projects = () => {
  return (
    <section className="section-projects">
      <div className="headers-projects">
        <span>Projects</span>
        <a href="#contact">CONTACT ME</a>
      </div>
      <article className="projects-container">
        <div className="project">
          <div className="img-component">
            <ViewcodeFullScreen className="viewcode-fullscreen " />
            <img src={portafolio} alt="portafolio" />
          </div>
          <div className="container-text">
            <h4 className="h4-styles">DESIGN PORTFOLIO</h4>
            <div className="span-styles">
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>
          <Viewcode />
        </div>
        <div className="project">
          <div className="img-component">
            <ViewcodeFullScreen className="viewcode-fullscreen" />
            <img src={eLearning} alt="eLearning" />
          </div>
          <div className="container-text">
            <h4 className="h4-styles">E-LEARNING LANDING PAGE</h4>
            <div className="span-styles">
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>
          <Viewcode />
        </div>
        <div className="project">
          <div className="img-component">
            <ViewcodeFullScreen className="viewcode-fullscreen" />
            <img src={todoWebApp} alt="todoWebApp" />
          </div>
          <div className="container-text">
            <h4 className="h4-styles">TODO WEB APP</h4>
            <div className="span-styles">
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVASCRIPT</span>
            </div>
          </div>
          <Viewcode />
        </div>
        <div className="project">
          <div className="img-component">
            <ViewcodeFullScreen className="viewcode-fullscreen" />
            <img src={entertainment} alt="entertainment" />
          </div>
          <div className="container-text">
            <h4 className="h4-styles">ENTERTAINMENT WEB APP</h4>
            <div className="span-styles">
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVASCRIPT</span>
            </div>
          </div>
          <Viewcode />
        </div>
        <div className="project">
          <div className="img-component">
            <ViewcodeFullScreen className="viewcode-fullscreen" />
            <img src={memoryGame} alt="memoryGame" />
          </div>
          <div className="container-text">
            <h4 className="h4-styles">MEMORY GAME</h4>
            <div className="span-styles">
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVASCRIPT</span>
            </div>
          </div>
          <Viewcode />
        </div>
        <div className="project">
          <div className="img-component">
            <ViewcodeFullScreen className="viewcode-fullscreen" />
            <img src={artGalery} alt="artGalery" />
          </div>
          <div className="container-text">
            <h4 className="h4-styles">ART GALLERY SHOWCASE</h4>
            <div className="span-styles">
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVASCRIPT</span>
            </div>
          </div>
          <Viewcode />
        </div>
      </article>
    </section>
  );
};
