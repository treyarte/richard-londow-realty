import React from "react";
import "./category.styles.scss";

const Category = () =>{
    return (
        <div>
            <div className="category-parent">
                <div className="house category-container">
                    <a href="#" className="category-link">
                        <div className="category-content">
                            
                            <h4>House</h4>
                            <span>15 properties</span>
                        </div>
                    </a>
                </div>
                <div className="office category-container">
                    <a href="#" className="category-link">
                        <div className="category-content">
                            <h4>Office</h4>
                            <span>15 properties</span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="category-parent">
                <div className="condo category-container">
                    <a href="#" className="category-link">
                        <div className="category-content">
                            <h4>Condo</h4>
                            <span>15 properties</span>
                        </div>
                    </a>
                </div>
                <div className="apartment category-container">
                    <a href="#" className="category-link">
                        <div className="category-content">
                            <h4>Apartment</h4>
                            <span>15 properties</span>
                        </div>
                    </a>
                </div>
                <div className="villa category-container">
                    <a href="#" className="category-link">
                        <div className="category-content">
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