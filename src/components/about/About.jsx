import React from "react";
import "./about.css";
import Skills from "./Skills";

const About = () => {
  
  return (
    <section id="about" className="container about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container">
        <div className="about__content">
          <h3>A dedicated Front-end Developer based in Dublin, Ireland</h3>
          <p className="about__description">My passion for the IT industry is fueled by my desire to continually progress my career direction. Through successful completion of training in Javascript, HTML, and CSS, and ongoing study of React, I am dedicated to staying up-to-date with the latest trends and advancements in the field. With a strong analytical acumen, a positive attitude, and unwavering determination, I am constantly thinking outside the box to generate innovative ideas and drive improvements. I am confident that I can bring value to any company and make a meaningful contribution to its success.</p>
        </div>
      </div>

      <Skills />
    </section>
  )
}

export default About