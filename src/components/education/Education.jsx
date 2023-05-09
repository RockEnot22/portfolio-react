import React from "react";
import "./education.css";
import data from "./data";
import Card from "./Card";

const Education = () => (
  <section id="education" className="container section education">
    <h2 className="section__title">Experience and Education</h2>

    <div className="education__container grid">
      <div className="timeline grid">
        {data.map((val, id) => {
          if (val.category === "education") {
            console.log(val.icon);
            return (
              <Card
                key={id}
                icon={val.icon}
                title={val.title}
                year={val.year}
                desc={val.desc}
              />
            );
          }
        })}
      </div>

      <div className="timeline grid">
        {data.map((val, index) => {
          if (val.category === "experience") {
            return (
              <Card
                key={index}
                icon={val.icon}
                title={val.title}
                year={val.year}
                desc={val.desc}
              />
            );
          }
        })}
      </div>
    </div>
  </section>
);

export default Education;
