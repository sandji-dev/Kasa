import React from "react";
import aboutBanner from '../../assets/images/aboutBanner.png'
import  './AboutBanner.scss'

function AboutBanner () {
    return(
        <div className="about-banner">
            <img src={aboutBanner} alt="HomeBanner" />
        </div>
    )
}
export default AboutBanner;