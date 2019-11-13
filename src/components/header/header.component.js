import React from "react"
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";                
import logo from "../../assets/Richardtranslogo1.png";
import "./header.styles.scss";
const Header = () => {
    return (
        <Navbar fixed="top" bg="white" expand="lg" className="header">
            <img src={logo} alt="Logo" className="logo"/>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Properties</Nav.Link>
                    <Nav.Link href="#link">Categories</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                    <Nav.Link href="#link">Sign In</Nav.Link>
                    {/* <NavDropdown title="My Account" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Favorites</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Messages</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;