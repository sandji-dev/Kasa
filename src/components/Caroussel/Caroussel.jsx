import { useState } from "react";
import "./Caroussel.scss";

function Caroussel({ pictures }) {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (length === 1) {
    return (
      <div className="carousel">
        <img className="carousel-image" src={pictures[0]} alt="logement" />
      </div>
    );
  }

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
          ‹
        </button>
        <img className="carousel-image" src={pictures[current]} alt="logement" />
        <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
          ›
        </button>
        <p className="carousel-counter">
          {current + 1} / {length}
        </p>
      </div>
    </div>  
  );
}

export default Caroussel;
