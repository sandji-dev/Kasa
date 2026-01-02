import React from "react";
import Card from "../Cards/Card";
import "./Gallery.scss"



function Gallery ({logements}) {
    return (
        <section className="container">
            <div className="displayGallery">
                {logements.map((logement) => (
                <Card 
                    key={logement.id}
                    id={logement.id}
                    title={logement.title}
                    cover={logement.cover}
                />
                ))}
            </div>
        </section>    
    );
}
export default Gallery