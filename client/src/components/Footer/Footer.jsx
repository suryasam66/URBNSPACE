import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram ,faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo5.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="f-info-socials">
            {/* Facebook */}
            <a href="https://www.facebook.com/suryakanta.samanta.52090" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/suryasamanta73/?hl=en" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            {/* Twitter */}
            <a href="https://twitter.com/SURYA73RP" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
        </div>

        
        <div className="f-info-links">
               <a href="/privacy">Privacy</a>
               <a href="/terms">Terms</a>
        </div>
        

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Saltlake sector-V,Kolkata,INDIA</span>
          <div className="flexCenter f-menu">
            <a href="/properties">Property</a>
            <a href="/Services">Services</a>
            <a href="/">Product</a>
            <a href="/AboutUs">About Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
