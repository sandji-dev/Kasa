import React from "react"
import "./Banner.scss"
import bannerImage from "../../assets/images/homeBanner.png"


function Banner() {
    return (
        <div className="banner">
            <img src={bannerImage} alt="banniere" className="banner-img" />
            <h1 className="banner-text">Chez vous partout et ailleurs</h1>

        </div>
    )
}
export default Banner