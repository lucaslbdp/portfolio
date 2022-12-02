import React from "react";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>lucasabarrionuevo1@gmail.com</h5>
            <a
              href="mailto:lucasabarrionuevo1@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Enviar un mensaje
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+54 381 6851705</h5>
            <a href="https://walink.co/285853" target="_blank" rel="noreferrer">
              Enviar un mensaje
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electronico"
            required
          />
          <textarea name="message" ows="7" placeholder="Tu mensaje" required />
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
