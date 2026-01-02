import React from "react";
import "./Rating.scss";

function Rating({ rating }) {
    const stars = [1, 2, 3, 4, 5];

    return (

        <div className="rating">
        {stars.map((level) => (
            <svg
                key={level}
                className={`star ${level <= Number(rating) ? "filled" : "empty"}`}
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M18.6484 12L15 0L11.3516 12H0L9.27344 18.6L5.74219 30L15 22.95L24.2734 30L20.7422 18.6L30     12H18.6484Z" />
            </svg>
        ))}
        </div>
);
}

export default Rating;