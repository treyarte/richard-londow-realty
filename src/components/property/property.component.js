import React from "react";
import "./property.styles.scss";

const Property = () =>{
    return (
        <div class="card property-card">
            <img src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    )
}

export default Property;