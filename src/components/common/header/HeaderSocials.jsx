import React from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/lucas-barrionuevo-8b92861b0/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/lucaslbdp" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://walink.co/8ee598" target="_blank" rel="noreferrer">
        <BsWhatsapp />
      </a>
    </div>
  );
};

export default HeaderSocials;
