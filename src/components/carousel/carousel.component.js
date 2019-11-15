import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Hero from "../hero/hero.component";
import {connect} from "react-redux";

const MyCarousel = ({propertiesCollection}) => {
    return (
        <Carousel>
        {
            propertiesCollection.filter((property, index) => index < 5)
            .map((property) => (
                <Carousel.Item key={property.id}>
                    <Hero property={property}/>
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