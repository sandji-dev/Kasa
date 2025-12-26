import React from "react";
import Collapse from "../../components/Collapse/Collapse";
import aboutData from "../../data/aboutData";
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import "./About.scss"


function About() {
    return (
        <div className="about">
            <AboutBanner />
            <div className="about-collapses">
                {aboutData.map((item, index) => (
                    <Collapse
                    key={index}
                    title={item.title}
                    content={item.content}
                    />
                ))}
            </div>
        </div>
    );
}

export default About
