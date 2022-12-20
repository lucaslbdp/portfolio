import React from "react";
import mern from "../../assets/mern.jpg"
import swapi from "../../assets/swapi.PNG";
import capez from "../../assets/capez.PNG";
import "./portfolio.css";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: mern,
      title: "E-commerce",
      description:"Proyecto full stack en desarrollo",
      github: null,
      demo: null
    },
    {
        id: 2,
        image: swapi,
        title: "Swapi",
        description: "Llamada a api de stars wars",
        github: "https://github.com",
        demo: "www.google.com.ar",
      },
      {
        id: 3,
        image: capez,
        title: "Capez Comunicaciones",
        description:"Pagina realizada en wordpress",
        github: null,
        demo: "https://capez.com.ar/",
      }
  ];

  return (
    <section id="portfolio">
      <h5>Mi trabajo reciente</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, description }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>

              <h3>{title}</h3>
              <h4>{description}</h4>
              <div className="portfolio__item-cv">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Probar
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
