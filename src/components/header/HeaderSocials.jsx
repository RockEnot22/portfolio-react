import React from "react";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a className="header__socials-link" href="https://www.linkedin.com/in/viktoriia-mokhna/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      <a className="header__socials-link" href="https://github.com/RockEnot22" target="_blank" rel="noreferrer"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocial