import { useState } from "react";
import "./Collapse.scss";
import arrowIcon from "../../assets/Vector.png"

export default function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => setIsOpen(prev => !prev);

    return (
        <div className={`collapse ${isOpen ? "open" : ""}`}>
            <div className="collapse-header" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <img 
                    src={arrowIcon} 
                    alt="flèche" 
                    className={`collapse-arrow ${isOpen ? "open" : ""}`} 
                />
            </div>

            {/* Suppression du {isOpen && ...} pour permettre l'animation CSS */}
            <div className="collapse-content">
                <div className="collapse-text"> 
                    {Array.isArray(content) ? (
                        <ul>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            </div>
        </div>
    );
}