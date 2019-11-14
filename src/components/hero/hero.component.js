import React from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import {createStructuredSelector} from "reselect";
import {selectPropertiesCollections} from "../../redux/properties/properties.selectors";
import "./hero.styles.scss";
import { connect } from "react-redux";

const Hero = ({collections}) => {
    console.log(collections[0]);
    const {address, title, imageUrls, rooms, size, status} = collections[0];
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

export const Hero2 = () => {
    return (
        <div>
            {/* <img src="http://themes.g5plus.net/beyot/wp-content/uploads/2017/01/property-42-1200x600.jpg" className="hero-image"/> */}
            <img src="https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg" className="hero-image"/>
        <Card bg="dark" text="white" className="my-card">
            <Card.Body>
                <h2 className="house-title">Restaurant Austin, $1.2M
                    <Badge className="house-status" variant="primary">For Sale</Badge>
                </h2>
                
                <Card.Text>Austin, TX 78702 <span className="fas fa-map-marker-alt location-marker"></span></Card.Text>
            </Card.Body>
        </Card>

        <Card bg="light" text="dark" className="my-card">
            <Card.Body>
                <ul className="hero-details">
                    <li><span className="fas fa-bed"></span>4 <Card.Subtitle className="mb-2 text-muted hero-subtitle">Bedrooms</Card.Subtitle></li>
                    <li><span className="fas fa-bath"></span>3 <Card.Subtitle className="mb-2 text-muted hero-subtitle">Bathrooms</Card.Subtitle></li>
                    <li><span className="fas fa-vector-square"></span>200 Sqft  <Card.Subtitle className="mb-2 text-muted hero-subtitle">Size</Card.Subtitle> </li>
                </ul>
            </Card.Body>
        </Card>

        </div>
    )
};


export const Hero3 = () => {
    return (
        <div>
            <img src="http://themes.g5plus.net/beyot/wp-content/uploads/2017/01/property-42-1200x600.jpg" className="hero-image"/>
            {/* <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" className="hero-image"/> */}
        <Card bg="dark" text="white" className="my-card">
            <Card.Body>
                <h2 className="house-title">Restaurant Austin, $1.2M
                    <Badge className="house-status" variant="primary">For Sale</Badge>
                </h2>
                
                <Card.Text>Austin, TX 78702 <span className="fas fa-map-marker-alt location-marker"></span></Card.Text>
            </Card.Body>
        </Card>

        <Card bg="light" text="dark" className="my-card">
            <Card.Body>
                <ul className="hero-details">
                    <li><span className="fas fa-bed"></span>4 <Card.Subtitle className="mb-2 text-muted hero-subtitle">Bedrooms</Card.Subtitle></li>
                    <li><span className="fas fa-bath"></span>3 <Card.Subtitle className="mb-2 text-muted hero-subtitle">Bathrooms</Card.Subtitle></li>
                    <li><span className="fas fa-vector-square"></span>200 Sqft  <Card.Subtitle className="mb-2 text-muted hero-subtitle">Size</Card.Subtitle> </li>
                </ul>
            </Card.Body>
        </Card>

        </div>
    )
};

const mapStateToProps = state=>({
    collections: state.properties.collections
});

export default connect(mapStateToProps)(Hero);
// export default Hero;