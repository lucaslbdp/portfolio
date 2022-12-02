import React from "react";
import family from "../../assets/family.jpeg";
import { FiAward, FiUsers, FiFolder } from "react-icons/fi";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h2>Sobre mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={family} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>2+ años</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>5+</small>
            </article>
            <article className="about__card">
              <FiFolder className="about__icon" />
              <h5>Proyectos</h5>
              <small>5+</small>
            </article>
          </div>

          <p>
            Soy un padre de familia relativamente nuevo, tengo 2 años y medio de casado y una bebé de 2 meses. 
            Desarrollador frontend junior (estudiando para ser full stack), buscando generar más
            experiencia en la programación.<br></br>
             Vivo en Tucumán, Argentina
          </p>
          <a href="#contact" className="btn btn-primary">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
