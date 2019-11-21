import React from "react";
import "./hero-banner.styles.scss";
import Search from "../../components/search/search.component"
import heroImage from "../../assets/hero-banner-background.jpeg";
const HeroBanner = () => {
        
    return (
    
    <div class="hero-banner-container">
        <div className="hero-banner-content container"> 
                <Search/>
        </div>
    </div> 

    )
}

export default HeroBanner;