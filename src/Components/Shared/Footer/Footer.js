import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGooglePlus, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <footer>
            <div className='footer-content'>
                <h3>bikers headquarter</h3>
                <p>We are the official Sports Bike dealer of Yamaha, Suzuki, Cbr</p>
                <div className='social'>
                <a href=""> <FontAwesomeIcon icon={faFacebook} /></a>
                <a href=""> <FontAwesomeIcon icon={faTwitter} /></a>
                <a href=""> <FontAwesomeIcon icon={faGooglePlus} /></a>
                <a href=""> <FontAwesomeIcon icon={faGithub} /></a>
                <a href=""> <FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </div>
            <div className='footer-bottom'>
                <p className='copyright'>copyright &copy; 2022 Bikers Headquarter. Designed by <span>Monir Hossain</span></p>
            </div>
        </footer>
    );
};

export default Footer;