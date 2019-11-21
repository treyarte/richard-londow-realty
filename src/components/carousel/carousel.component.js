import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Hero from "../hero/hero.component";
import FeaturedProperty from "../featured-property/featured-property.component";
import {connect} from "react-redux";

const MyCarousel = ({propertiesCollection}) => {
    const iconStyles = {
        "font-size": "30px"
    }
    return (
        <Carousel 
            indicators={false}
            nextIcon={<span class="fas fa-arrow-circle-right carousel-icon" style={iconStyles}></span>}    
            prevIcon={<span class="fas fa-arrow-circle-left carousel-icon" style={iconStyles}></span>}
        >
        {
            propertiesCollection.filter((property, index) => index < 5)
            .map((property) => (
                <Carousel.Item key={property.id}>
                    <FeaturedProperty property ={property}/>
                </Carousel.Item>
            ))
        }
        </Carousel>
    )
}


const mapStateToProps = state =>({
    propertiesCollection: state.properties.collections
});

export default connect(mapStateToProps)(MyCarousel);