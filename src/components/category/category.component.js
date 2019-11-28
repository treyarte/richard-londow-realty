import React from "react";
import "./category.styles.scss";

const Category = () =>{
    return (
        <div>
            <div class="category-parent">
                <div class="house category-container">
                    <a href="#" class="category-link">
                        <div class="category-content">
                            
                            <h4>House</h4>
                            <span>15 properties</span>
                        </div>
                    </a>
                </div>
                <div class="office category-container">
                    <a href="#" class="category-link">
                        <div class="category-content">
                            <h4>Office</h4>
                            <span>15 properties</span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="category-parent">
                <div class="condo category-container">
                    <a href="#" class="category-link">
                        <div class="category-content">
                            <h4>Condo</h4>
                            <span>15 properties</span>
                        </div>
                    </a>
                </div>
                <div class="apartment category-container">
                    <a href="#" class="category-link">
                        <div class="category-content">
                            <h4>Apartment</h4>
                            <span>15 properties</span>
                        </div>
                    </a>
                </div>
                <div class="villa category-container">
                    <a href="#" class="category-link">
                        <div class="category-content">
                            <h4>Villa</h4>
                            <span>15 properties</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}


export default Category;