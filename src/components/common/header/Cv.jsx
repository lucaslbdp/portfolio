import React from "react";

const Cv = () => {
  return (
    <div className="cv">
      <a download="Cv.pdf" href="Cv.pdf" className="btn">
        Descargar CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Hablemos
      </a>
    </div>
  );
};

export default Cv;
