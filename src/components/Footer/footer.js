import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import './footer.scss'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Follow us</h4>
                        <ul className="social-icons">
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li>
                                <a href="instagram.com">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Contact us</h4>
                        <ul className="contact-info">
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Viman Nagar, Pune</span>
                            </li>
                            <li>
                                <i className="fas fa-phone"></i>
                                <span>(+91) 9097*****5</span>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <span>info@recipebook.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>About us</h4>
                        <p>
                            Recipe Book is a website that provides delicious and healthy recipes
                            for people who love cooking. Our mission is to inspire people to cook
                            and eat well by providing them with easy-to-follow recipes and
                            nutritional information.
                        </p>
                    </div>
                </div>
                <hr />
                <p className="text-center">&copy; 2023 Recipe Book</p>
            </div>
        </footer>
    );
}

export default Footer;