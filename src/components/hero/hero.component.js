import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import "./hero.styles.scss";
const Hero = () => {
    return (
        <div>
            <img src="http://themes.g5plus.net/beyot/wp-content/uploads/2017/01/property-42-1200x600.jpg" className="hero-image"/>
        <Card>
            <Card.Img variant="top" />
            <Card.Body className="card-title">
                <Card.Title>Restaurant Austin, 1.2M</Card.Title>
                <span>For Rent</span>
                <Card.Text>Austin, TX 78702</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>200 sqft</ListGroupItem>
                <ListGroupItem>4 bedrooms</ListGroupItem>
                <ListGroupItem>3 bathrooms</ListGroupItem>
            </ListGroup>
        </Card>
        </div>
    )
}
export default Hero;