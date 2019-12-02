import React from "react";
import logo from "../../assets/Richard_new_logo_cropped.png"
import "./footer.styles.scss";

const Footer = () => {
    const year = new Date();
    return (
        <div class="footer">
            <div className="row footer-content">
                <div className="footer-section col-lg-4">
                    <img src={logo} alt="image of logo"/>
                </div>
                <div className="footer-section col-lg-4">
                        <h4>Get in Contact</h4>
                        <ul>
                            <li><span className="fas fa-map-marker-alt"></span> 14090 Southwest Fwy Suite 102</li>
                            <li>someemail@someemail.com</li>
                            <li>(832) 547-3397</li>
                        </ul>
                </div>
                <div className="footer-section col-lg-4">
                    <h4>Follow Me</h4>    
                    <span className="fab fa-facebook-square social-links"></span>
                    <span className="fab fa-instagram social-links"></span>
                    <span className="fab fa-twitter-square social-links"></span>
                    <span className="fab fa-linkedin social-links"></span>
                </div>

                <div className="divider"></div>
                <p className="copyright">&copy; {year.getFullYear()} Richard Londow Realty </p>
            </div>
        </div>


    )
}

export default Footer;