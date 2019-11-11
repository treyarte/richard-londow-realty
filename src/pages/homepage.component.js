import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Homepage = () => {
    
    return (
        <Carousel>
            <Carousel.Item>
                <img src="https://si.wsj.net/public/resources/images/B3-DM067_RIGHTS_IM_20190319162958.jpg" alt=""/>
                <Carousel.Caption>
                    <h3>First Slide Label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src="https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/09/Open-Houses-sept-13-14.jpg" alt=""/>
                <Carousel.Caption>
                    <h3>Second Slide Label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src="https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/09/open-houses-header-sept-21.jpg" alt=""/>
                <Carousel.Caption>
                    <h3>Third Slide Label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Homepage;