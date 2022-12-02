import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
  const skillsFrontend = [
    { name: "HTML", nivel: "Avanzado" },
    { name: "CSS", nivel: "Avanzado" },
    { name: "Bootstrap", nivel: "Avanzado" },
    { name: "JavaScript", nivel: "intermedio" },
    { name: "React", nivel: "Intermedio" },
    { name: "Wordpress", nivel: "Intermedio" },
  ];
  const skillsBackend = [
    { name: "Node JS", nivel: "Básico" },
    { name: "Mongo DB", nivel: "Básico" },
    { name: "MySQL", nivel: "Básico" },
  ];

  return (
    <section id="experience">
      <h5>Mis skills</h5>
      <h2>Mi experiencia</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            {skillsFrontend.map((skill) => {
              return (
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small className="text-light">{skill.nivel}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend</h3>
          <div className="experience__content">
            {skillsBackend.map((skill) => {
              return (
                <div className="experience__content">
                  <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>{skill.name}</h4>
                      <small className="text-light">{skill.nivel}</small>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
