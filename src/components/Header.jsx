import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram, FaFacebookF, FaBars, FaTimes,FaLinkedinIn 
} from 'react-icons/fa';
import './Header.css';
import logoc from '/logo.png';

const Header = () => {
  // Mobile menu toggle state
  const [menuOpen, setMenuOpen] = useState(false);

  /*
  // Search functionality (currently disabled)
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  */

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        {/* Mobile View: Hamburger and Logo side by side */}
        <div className="mobile-header">
          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="mobile-logo">
              <img src={logoc} alt="Soulcode Logo" />
          </div>
        </div>

        {/* Desktop View: Logo and Navigation */}
        <div className="top-left">
          <div className="top-logo">
            <img src={logoc} alt="Soulcode Logo" />
          </div>
          <nav className="nav-links">
            <Link to="/">HOME</Link>
            <Link to="/#about">ABOUT</Link>
            <Link to="/#services">SERVICES</Link>
            <Link to="/#testimonials">RESULTS</Link>
            <Link to="/#freebie">WORKSHEET</Link>
            <Link to="/contact">CONTACT</Link>
          </nav>
        </div>

        <div className="social-icons">
          <a href="https://www.instagram.com/pooja_abhayk" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/pooja.gahlot.127" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
           <a href="https://www.linkedin.com/in/pooja-abhayk-235b33384/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-dropdown">
          <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link to="/#about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
          <Link to="/#services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
          <Link to="/#testimonials" onClick={() => setMenuOpen(false)}>RESULTS</Link>
          <Link to="/#freebie" onClick={() => setMenuOpen(false)}>WORKSHEET</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
          <div className="mobile-social-icons">
            <a href="https://www.instagram.com/pooja_abhayk" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/pooja.gahlot.127" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/pooja-abhayk-235b33384/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className="main-header">
        <div className="logo">
          <h1>Pooja <span>Abhay</span></h1>
          <p>Life ✦ Relationship Coach</p>
        </div>
      </div>
    </header>
  );
};

export default Header;