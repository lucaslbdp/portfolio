import React from "react";
import { FaCheck } from "react-icons/fa";
import "./services.css";

const Services = () => {
  const designUi = [
    { name: "Diseño UX/UI"},
    { name: "Buena experiencia para el cliente"},
    { name: "Diseño de interface de plataformas"},
    { name: "UX Research (Investigación)"},
    { name: "UX Writing (Lenguaje)"},
  ];
  const develop = [
    { name: "Desarrollo web"},
    { name: "Desarrollo de aplicaciones"},
    { name: "Desarrollo seguro"},
    { name: "Desarrollo personalizado"},
  ];
  const designGraph = [
    { name: "Diseño gráfico"},
    { name: "Flyers digitales"},
    { name: "Piezas gráficas para redes sociales"},
    { name: "Imagenes a medida"},
    { name: "Tu marca tendrá identidad"},
  ];

  return (
    <section id="services">
      <h5>Lo que ofrezco</h5>
      <h2>Servicios</h2>

      <div className="container services__container">
        <article className="service">
          <div className="services__head">
            <h3>Diseño UI/UX</h3>
          </div>
          <ul className="service__list">
            {designUi.map((service, i) => {
              return (
                <li key={i}>
                  <FaCheck className="service__list-icon" />
                  <p>{service.name}</p>
                </li>
              );
            })}
          </ul>
        </article>

        <article className="service">
          <div className="services__head">
            <h3>Desarrollo Web</h3>
          </div>
          <ul className="service__list">
            {develop.map((service, i) => {
              return (
                <li key={i}>
                  <FaCheck className="service__list-icon" />
                  <p>{service.name}</p>
                </li>
              );
            })}
          </ul>
        </article>

        <article className="service">
          <div className="services__head">
            <h3>Diseño gráfico</h3>
          </div>
          <ul className="service__list">
            {designGraph.map((service, i) => {
              return (
                <li key={i}>
                  <FaCheck className="service__list-icon" />
                  <p>{service.name}</p>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
