import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  const pages = [
    { name: "Inicio", id: "#home" },
    { name: "Sobre mi", id: "#about" },
    { name: "Experiencia", id: "#experience" },
    { name: "Servicios", id: "#services" },
    { name: "Contacto", id: "#contact" },
  ];

  return (
    <footer>
      <ul className="permalinks">
        {pages.map((page) => {
          return (
            <li>
              <a href={page.id}>{page.name}</a>
            </li>
          );
        })}
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/luquiita.festt.1" target="_blank" rel="noreferrer">
          <AiFillFacebook />
        </a>
        <a href="https://www.instagram.com/lucas.fest/" target="_blank" rel="noreferrer">
          <AiFillInstagram />
        </a>
      </div>

      <div className="footer__copyrigth">
        <small>&copy; Lucas Barrionuevo. Todos los derechos reservados</small>
      </div>
    </footer>
  );
};

export default Footer;
