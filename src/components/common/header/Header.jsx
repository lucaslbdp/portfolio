import React from "react";
import Cv from "./Cv";
import me from "../../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header id="#">
      <div className="container header__container">
        <h5>Hola, soy</h5>
        <h1>Lucas Barrionuevo</h1>
        <h5 className="text-ligth">Front end Developer</h5>
        <Cv />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
