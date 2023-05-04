import React, {useState} from "react";
import "./portfolio.css";
import Filters from "./Filters";

const Portfolio = () => {
  const [items, setItems] = useState(Filters);

  const filterItem = (categoryItem) => {
    const updatedItems = Filters.filter((currentElement) => {
      return currentElement.category === categoryItem;
    });
    setItems(updatedItems);
  }

  return (
    <section id="portfolio" className="container section portfolio">
      <h2 className="section__title">Recent Work</h2>
      <div className="portfolio__filters">
          <span className="portfolio__item" onClick={() => setItems(Filters)}>Everything</span>
          <span className="portfolio__item" onClick={() => filterItem("HTML/LESS")}>HTML/LESS</span>
          <span className="portfolio__item" onClick={() => filterItem("JavaScript")}>JavaScript</span>
        </div>

      <div className="grid portfolio__container">
        {items.map((elem) => {
          const{id, image, title, category, description, github, demo} = elem;
          return (
            <article className="portfolio__card" key={id}>
              <div className="portfolio__thumbnail">
                  <img src={image} alt={description} className="portfolio__img" />
              </div>
              <span className="portfolio__category">{category}</span>
              <h3 className="portfolio__title">{title}</h3>
              <p className="portfolio__description">{description}</p>
              <div className="portfolio__buttons">
                <a href = {github} className="btn" target={"_blank"} rel="noreferrer">GitHub</a>
                <a href = {demo} className="btn" target={"_blank"} rel="noreferrer" >Demo</a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio