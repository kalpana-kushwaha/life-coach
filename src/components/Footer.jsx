import React from "react";
import { Link } from 'react-router-dom';
import {
  FaInstagram, FaFacebookF, FaTwitter, FaTiktok, FaPinterestP, FaYoutube
} from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <ul className="footer-links left">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/#about">ABOUT</Link></li>
          <li><Link to="/#services">SERVICES</Link></li>          
        </ul>

        <div className="footer-center">
          <h1 className="footer-logo">Pooja Abhay</h1>
          <p className="footer-subtitle">Life ✦ Relationship Coach</p>
          <div className="footer-icons">
          <a href="https://www.instagram.com/pooja_abhayk" target="_blank" rel="noopener noreferrer">
          <FaInstagram /></a>
          <a href="https://www.facebook.com/pooja.gahlot.127" target="_blank" rel="noopener noreferrer">
          <FaFacebookF /> </a>             
          </div>
        </div>

        <ul className="footer-links right">
          <li><Link to="/#testimonials">RESULTS</Link></li>
          <li><Link to="/#freebie">WORKSHEET</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Pooja Abhay • All Rights Reserved</p>
        
      </div>

      <div className="footer-meta">
        <p>
          ✉ <a href="mailto:Poojaabhayk@gmail.com">Email</a> | 📍 Based in Gurugram | Sessions available worldwide
        </p>
        <p><Link to="/privacy">Privacy Policy</Link> • <Link to="/terms">Terms & Conditions</Link></p>        
       
      </div>

    </footer>
  );
};

export default Footer;
