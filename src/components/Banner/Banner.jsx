import React from "react"
import "./Banner.scss"
import bannerImage from "../../assets/images/homeBanner.png"

export default function Banner() {
    return (
        <section className="container">
            <div className="banner">
                <img src={bannerImage} alt="Paysage" />
                <div className="banner-overlay"></div>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </section>
    );
}
