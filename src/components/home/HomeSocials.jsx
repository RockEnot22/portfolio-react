import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const HomeSocial = () => {
  return (
    <div className="home__socials">
      <a
        className="home__socials-link"
        href="https://www.linkedin.com/in/viktoriia-mokhna/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        className="home__socials-link"
        href="https://github.com/RockEnot22"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        className="home__socials-link"
        href="mailto:mokhnaviktoriia@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <SiGmail />
      </a>
    </div>
  );
};

export default HomeSocial;
