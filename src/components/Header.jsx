import React from "react";
import man from "/image-profile-mobile.webp";
import iconGit from "/icon-github.svg";
import iconLinkedin from "/icon-linkedin.svg";
import iconX from "/icon-twitter.svg";
import iconMentor from "/icon-frontend-mentor.svg";
import "./Header.css";
export const Header = () => {
  return (
    <article className="header-container">
      <section className="info-section">
        <h2>Nice to meet you! Im Adam keyes.</h2>
        <p>
          Based in the UK, I’m a front-end developer passionate about building accessible
          web apps that users love.
        </p>
        <a href="#contact">CONTACT ME</a>
      </section>
      <section className="img-links">
        <div className="social-links-img">
          <span>adamkeyes</span>
          <div className="icon-container-links">
            <a className="icon" href="git">
              <img src={iconGit} alt="git" />
            </a>
            <a className="icon" href="mentor">
              <img src={iconMentor} alt="mentor" />
            </a>
            <a className="icon" href="in">
              <img src={iconLinkedin} alt="in" />
            </a>
            <a className="icon" href="x">
              <img src={iconX} alt="x" />
            </a>
          </div>
        </div>
      </section>
      <hr />
    </article>
  );
};
