import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {Hero, Hero2, Hero3} from "../components/hero/hero.component";
const Homepage = () => {
    
    return (
        <Carousel>
            <Carousel.Item>
                <Hero/>
            </Carousel.Item>

            {/* <Carousel.Item>
                <Hero2/>
            </Carousel.Item>

            <Carousel.Item>
                <Hero3/>
            </Carousel.Item> */}
        </Carousel>
    )
}

export default Homepage;