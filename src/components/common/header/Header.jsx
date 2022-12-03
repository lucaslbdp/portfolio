import React from "react";
import Cv from "./Cv";
import HeaderSocials from "./HeaderSocials";
import Lottie from "react-lottie";
import imgDeveloper from "../../../static/imgDeveloper.json";
import "./header.css";

const Header = () => {
  const imgStart = {loop:true, autoplay: true, animationData:imgDeveloper}


  return (
    <header id="#">
      <div className="container header__container">
        <h5>Hola, soy</h5>
        <h1>Lucas Barrionuevo</h1>
        <h5 className="text-ligth">Front end Developer</h5>
        <Cv />
        <HeaderSocials />

        <div className="me">
          <Lottie options={imgStart} height={380} width={300}/>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
