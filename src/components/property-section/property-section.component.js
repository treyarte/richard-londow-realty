import React from "react";
import Property from "../property/property.component";
import "./property-section.styles.scss";
import {connect} from "react-redux";

const PropertySection = ({properties}) => {
    return (
        <div className="property-container">
            <div className="row">
            {
                properties.filter((property, index) => index < 10).map( (property) => (
                <div className="col-lg-4 col-md-6 col-sm-12 property-item-container">
                    <Property property= {property}/>
                </div>
                ))
            }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    properties: state.properties.collections 
})

export default connect(mapStateToProps)(PropertySection);