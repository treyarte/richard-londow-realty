import React from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import "./hero.styles.scss";
const Hero = () => {
    return (
        <div>
            <img src="http://themes.g5plus.net/beyot/wp-content/uploads/2017/01/property-42-1200x600.jpg" className="hero-image"/>
        <Card bg="dark" text="white" className="my-card">
            <Card.Body>
                <h2 class="house-title">Restaurant Austin, $1.2M
                    <Badge className="house-status" variant="primary">For Sale</Badge>
                </h2>
                
                <Card.Text>Austin, TX 78702 <span class="fas fa-map-marker-alt location-marker"></span></Card.Text>
            </Card.Body>
        </Card>

        <Card bg="light" text="dark" className="my-card">
            <Card.Body>
                <ul className="hero-details">
                    <li><span class="fas fa-bed"></span>4 <Card.Subtitle className="mb-2 text-muted hero-subtitle">Bedrooms</Card.Subtitle></li>
                    <li><span class="fas fa-bath"></span>3 <Card.Subtitle className="mb-2 text-muted hero-subtitle">Bathrooms</Card.Subtitle></li>
                    <li><span class="fas fa-vector-square"></span>200 Sqft  <Card.Subtitle className="mb-2 text-muted hero-subtitle">Size</Card.Subtitle> </li>
                </ul>
            </Card.Body>
        </Card>

        </div>
    )
}
export default Hero;