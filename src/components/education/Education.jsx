import React from "react";
import "./education.css";
import{SiCheckio} from "react-icons/si";
import {HiBadgeCheck} from "react-icons/hi";

const Education = () => {
  return (
    <section id="education">
      <h4> Where did I learn</h4>
      <h2>My Education</h2>
      <div className="container education__container">
        <div className="education__content">
          <article className="education__details">
            <SiCheckio />
            <p>JavaScript. Coding Kickstarter</p>
            <h4>Code First Girls</h4>
          </article>

          <article className="education__details">
            <SiCheckio />
            <p>JavaScript. Professional development of Web Interfaces JavaScript. Professional development of Web Interfaces</p>
            <h4>HTML Academy</h4>
          </article>

          <article className="education__details">
            <SiCheckio />
            <p>HTML/CSS adaptive website coding and automation</p>
            <h4>HTML Academy</h4>
          </article>

          <article className="education__details">
            <HiBadgeCheck />
            <p>Master of Science (MSc) ib Biotechnology</p>
            <h4>HSaint Petersburg State Institute of Technology (Technical University)</h4>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Education