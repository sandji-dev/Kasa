import React from "react";
import { useParams, Navigate } from "react-router-dom";
import logements from "../../data/logement";
import "./Logement.scss";
import Host from "../../components/Host/Host";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";
import Caroussel from "../../components/Caroussel/Caroussel";
import Collapse from "../../components/Collapse/Collapse";


function Logement() {
        const { id } = useParams();
        const logement = logements.find((l) => l.id === id);

        if (!logement) {
            return <Navigate to="/Error" replace />;
        }

    return (
        <div className="logement-wrapper">
            <div className="logement">
                <Caroussel pictures={logement.pictures} />
    
                <div className="logement-header">
                    <div>
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                        <Tags tags={logement.tags} />
                    </div>
    
                    <div className="host-rating">
                        <Host host={logement.host} />
                        <Rating rating={logement.rating} />
                    </div>
                </div>
                <div className="logement-collapses">
                    <Collapse title="Description" content={logement.description} />
                    <Collapse title="Équipements" content={logement.equipments} />
                </div>
            </div>
        </div>     
);

}

export default Logement;
