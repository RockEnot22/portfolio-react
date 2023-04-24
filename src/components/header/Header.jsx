import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Viktoriia Mokhna</h1>
        <h3 className="text-light">Junior front-end developer</h3>
        <CTA />
        <HeaderSocial />

        <div className="me"></div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header