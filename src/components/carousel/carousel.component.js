import React from "react";
import Carousel from "react-bootstrap/Carousel";
import FeaturedProperty from "../featured-property/featured-property.component";
import {connect} from "react-redux";

const MyCarousel = ({propertiesCollection}) => {
    const iconStyles = {
       fontSize: "30px"
    }
    return (
        <Carousel 
            indicators={false}
            nextIcon={<span className="fas fa-arrow-circle-right carousel-icon" style={iconStyles}></span>}    
            prevIcon={<span className="fas fa-arrow-circle-left carousel-icon" style={iconStyles}></span>}
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