import React from "react";
import "./featured-property.styles.scss";

const FeaturedProperty = ({property}) =>{
    const {address, title, imageUrls, rooms, size, status, garage, price} = property

    const featuredStyles = {
        backgroundImage: `url(${imageUrls[0]})`
    }

    const badgeColor = {
        sale: "primary",
        rent: "warning",
        sold: "secondary"
    }

    return(
        <div className="featured-property" >
            <div className="featured-property-image"style={featuredStyles}></div>
            <div className="featured-property-content">
                <div className="row">
                    <div className="col-lg-12">
                        <h4>{title}</h4>
                    </div>
                    <div className="col-lg-12">
                        <p><span className="fas fa-map-marker-alt location-marker"></span> {address.location} {address.city} {address.state}</p>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-6">
                        <p><span className="fas fa-bed"></span> {rooms.bedroom} Bedrooms</p>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-6">
                        <p><span className="fas fa-bath"></span> {rooms.bathroom} BathRooms</p>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-6">
                        <p><span className="fas fa-vector-square"></span> {size} sqft</p>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-6">
                        <p><span className="fas fa-warehouse"></span> {garage.quantity} Garages</p>
                    </div>
                    <hr className="divider"/>
                        <div className="col-lg-6 col-sm-6 col-6">
                            <p className={`status-label badge badge-${badgeColor[status]}`}>{status}</p>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6">
                            <p className="price-label">{price}</p>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperty;