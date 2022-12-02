import React from "react";
import portfolio1 from "../../assets/portfolio1.jpg";
import portfolio2 from "../../assets/portfolio2.PNG";
import "./portfolio.css";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: portfolio1,
      title: "Swapi api de star wars",
      github: "https://github.com",
      demo: "www.google.com.ar",
    },
    {
        id: 2,
        image: portfolio1,
        title: "Swapi api de star wars",
        github: "https://github.com",
        demo: "www.google.com.ar",
      },
      {
        id: 3,
        image: portfolio2,
        title: "Capez Comunicaciones",
        description:"Pagina realizada en wordpress",
        github: "https://github.com",
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
