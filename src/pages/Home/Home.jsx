import React from "react"
import logements from "../../data/logement"
import Banner from "../../components/Banner/Banner"
import Gallery from "../../components/Gallery/Gallery"

const Home = () => {
    return(
        <div>
                <Banner/>
                <Gallery logements={logements} /> 
        </div>
    )
}
export default Home