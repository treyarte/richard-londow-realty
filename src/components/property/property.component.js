import React from "react";
import "./property.styles.scss";

const Property = ({property}) =>{
    const {title, address, rooms, size, garage, imageUrls} = property;
    return (
        <div className="property-card">
            <div className="property-card-header">
                <div className="card-status">
                   
                </div>
                <img src={imageUrls[0]} className="property-card-img" alt="..."/>
            </div>
            
            <div className="property-card-body">
                <div className="row">
                    <div className="col-lg-12">
                        <h5 className="property-card-title">{title}</h5>
                    </div>
                    <div className="col-lg-12">
                        <p className="property-card-text "><small className="text-muted fas fa-map-marker-alt location-marker"> {address.location} {address.city} {address.state}</small></p>
                    </div>
                    
                    <div className="col-lg-6 col-sm-6 col-6">
                            <p><span className="fas fa-bed"></span> {rooms.bedroom} Bedrooms</p>
                    </div>
                    
                    <div className="col-lg-6 col-sm-6 col-6">
                            <p><span className="fas fa-bath"></span> {rooms.bathroom} Bathrooms</p>
                    </div>
                    
                    <div className="col-lg-6 col-sm-6 col-6">
                            <p><span className="fas fa-vector-square"></span> {size} sqft</p>
                    </div>
                    
                    <div className="col-lg-6 col-sm-6 col-6">
                            <p><span className="fas fa-warehouse"></span> {garage.quantity} Garages</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property;