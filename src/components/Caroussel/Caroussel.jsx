import { useState } from "react";
import "./Caroussel.scss";

function Caroussel({ pictures = [] }) {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  // sécurité si  le tableau est  vide
  if (!pictures.length) return null;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  // Cas 1 seule image (pas de flèches)
  if (length === 1) {
    return (
      <div className="carousel">
        <img
          className="carousel-image"
          src={pictures[0]}
          alt="Logement"
        />
      </div>
    );
  }

  //  Cas plusieurs images
  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={prevSlide}
          aria-label="Image précédente"
        >
          ‹
        </button>

        <img
          className="carousel-image"
          src={pictures[current]}
          alt={`Logement ${current + 1}`}
        />

        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={nextSlide}
          aria-label="Image suivante"
        >
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
