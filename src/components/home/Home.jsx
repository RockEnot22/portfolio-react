import React from "react";
import "./home.css";
import Me from "../../images/avatar.svg";
import HomeSocial from "./HomeSocials";
import ScrollDown from "./ScrollDown";
import CV from "../../images/cv.pdf";

const Home = () => (
  <section className="home container" id="home">
    <div className="home__intro">
      <img src={Me} className="home__img" alt="avatar" />
      <h3>Hello I'm</h3>
      <h1 className="home__name">Viktoriia Mokhna</h1>
      <h3 className="text-light">Front-End developer</h3>
      <HomeSocial />

      <div className="home__links">
        <a href="#contact" className="btn">
          Contact Me
        </a>
        <a className="btn" href={CV} download>
          Download CV
        </a>
      </div>

      <ScrollDown />
    </div>
  </section>
);

export default Home;
