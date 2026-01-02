import React from "react";
import aboutBanner from '../../assets/images/aboutBanner.png'
import  './AboutBanner.scss'

function AboutBanner () {
    return(
        <div className="about-banner">
            <img src={aboutBanner} alt="Paysage montagne" />
            <div className="about-banner-overlay"></div>
        </div>
    )
}
export default AboutBanner;