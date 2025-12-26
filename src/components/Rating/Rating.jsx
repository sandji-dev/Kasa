import React from "react";
import "./Rating.scss";

function Rating({ rating }) {
    const maxRating = 5;

    return (
        <div className="rating">
            {Array.from({ length: maxRating }, (_, index) => (
            <span
            key={index}
            className={index < Number(rating) ? "star filled" : "star"}
            >
            ★
            </span>
    ))}
    </div>
);
}

export default Rating;
