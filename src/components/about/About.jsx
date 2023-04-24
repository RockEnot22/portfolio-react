import React from "react";
import "./about.css";
import ME from "../../images/me-image.jpeg";

const About = () => {
  return (
    <section id="about">
      <h4>Get To Know</h4>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="illustration" />
          </div>
        </div>
        <div className="about__content">
          <h3>A dedicated Front-end Developer based in Dublin, Ireland</h3>
          <p>I have a desire to progress my career direction within the IT community, I have successfully completed training covering Javascript, HTML, CSS and continue to study React.
            With my analytical acumen, attitude and determination, coupled with enthusiasm and drive, ability to think outside the box for ideas and improvements, I can bring something of value to the any company.</p>
        </div>
      </div>
    </section>
  )
}

export default About