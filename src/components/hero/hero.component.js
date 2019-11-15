import React from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import "./hero.styles.scss";


const Hero = ({property}) => {

    const {address, title, imageUrls, rooms, size, status} = property;
    return (
        <div>
            {/* <img src="http://themes.g5plus.net/beyot/wp-content/uploads/2017/01/property-42-1200x600.jpg" className="hero-image"/> */}
            <img src={imageUrls[0]} className="hero-image" alt="House Hero Banner"/>
        <Card bg="dark" text="white" className="my-card-title">
            <Card.Body>
                <h2 className="house-title">{title}
                    <Badge className="house-status" variant="primary">{status}</Badge>
                </h2>
                
                <Card.Text><span className="fas fa-map-marker-alt location-marker"></span> {address.location} {address.city}, {address.state} {address.zipcode}</Card.Text>
            </Card.Body>
        </Card>

        <Card bg="light" text="dark" className="my-card-details">
            <Card.Body>
            <div className="hero-details">
                <div>
                    <span className="fas fa-bed"></span>
                    <div className="details"> 
                        <ul>
                            <li>{rooms.bedroom}</li>
                            <li>Bedrooms</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <span className="fas fa-bath"></span>
                    <div className="details">
                        <ul>
                            <li>{rooms.bathroom}</li>
                            <li>Bathrooms</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <span className="fas fa-vector-square"></span>
                    <div className="details">
                        <ul>
                            <li>{size}</li>
                            <li>Sqft</li>
                        </ul>
                    </div>
                </div>
            </div>
            </Card.Body>
        </Card>

        </div>
    )
};



export default Hero;
// export default Hero;