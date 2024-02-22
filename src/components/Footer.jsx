import React from "react";
import iconGit from "/icon-github.svg";
import iconLinkedin from "/icon-linkedin.svg";
import iconX from "/icon-twitter.svg";
import iconMentor from "/icon-frontend-mentor.svg";
import "./Footer.css";
export const Footer = () => {
  return (
    <>
      <section className="footer">
        <h3>adamkeyes</h3>
        <div className="icons-socials">
          <img src={iconGit} alt="git" />
          <img src={iconLinkedin} alt="in" />
          <img src={iconX} alt="x" />
          <img src={iconMentor} alt="mentor" />
        </div>
      </section>
    </>
  );
};
