import { Link } from "react-router-dom";
import "./Error404.scss";

export default function Error404() {
    return (
        <div className="error404">
            <h1>404</h1>
            <p>Oups! la page que vous demandez n existe pas</p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    );
}
