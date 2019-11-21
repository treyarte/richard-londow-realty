import React from "react";
import "./search.styles.scss";

const Search = () =>{
    return(
        <div className="search-container container-fluid">
            <div>
                <h4>Find Your New Home</h4>
            </div>
            <form>
                <div className="row">
                    <div className="col-lg-6">
                        <input className="form-control" type="text" placeholder="Enter Property, Location..."/>
                    </div>
                    <div className="col-lg-6">
                        <select className="form-control" name="status" id="property-status">
                            <option  defaultValue="Property Status" disabled>Property Status</option>
                            <option value="rent">Rent</option>
                            <option value="sold">Sold</option>
                            <option value="sell">Sell</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <select name="category" id="property-category" className="form-control">
                            <option defaultValue="Category" disabled>Category</option>
                            <option value="residential">Residential</option>
                            <option value="commercial">Commercial</option>
                            <option value="land">Land</option>
                            <option value="industrial">Industrial</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <select name="category" id="property-bedroom" className="form-control">
                                <option defaultValue="Bedroom" disabled>Bedroom</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <select name="category" id="property-bathroom" className="form-control">
                                    <option defaultValue="Bathroom" disabled>Bathroom</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <select name="category" id="property-category" className="form-control">
                            <option  defaultValue="Min Price" disabled>Min Price</option>
                            <option value="0">0</option>
                            <option value="1000">1000</option>
                            <option value="2000">2000</option>
                            <option value="3000">3000</option>
                            <option value="4000">4000</option>
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <select name="category" id="property-category" className="form-control">
                            <option  defaultValue="Max Price" disabled>Max Price</option>
                            <option value="5000">5000</option>
                            <option value="6000">6000</option>
                            <option value="7000">7000</option>
                            <option value="8000">8000</option>
                            <option value="9000">9000</option>
                            <option value="10000">10000</option>
                        </select>
                    </div>
                    <div className="col-lg-12">
                        <button className="btn btn-primary form-control">Search Property</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search;