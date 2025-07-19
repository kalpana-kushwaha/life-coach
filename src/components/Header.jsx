import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram, FaFacebookF, FaBars, FaTimes
} from 'react-icons/fa';
import './Header.css';

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
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className="nav-links">
          <Link to="/">HOME</Link> 
          <Link to="/#about">ABOUT</Link>
          <Link to="/#services">SERVICES</Link>
          <Link to="#testimonials">RESULTS</Link>
          <Link to="#freebie">WORKSHEET</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>

        {/*<div className="mobile-cart">
          <FaShoppingCart className="cart-icon" />
          <span className="cart-count">0</span>
        </div>*/}

        <div className="social-icons">
          <a href="https://www.instagram.com/pooja_abhayk" target="_blank" rel="noopener noreferrer">
          <FaInstagram /></a>
          <a href="https://www.facebook.com/pooja.gahlot.127" target="_blank" rel="noopener noreferrer">
          <FaFacebookF /> </a>         
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-dropdown">
          <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link> 
          <Link to="/#about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
          <Link to="/#services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
          <Link to="/#testimonials" onClick={() => setMenuOpen(false)}>RESULTS</Link>
          <Link to="#freebie" onClick={() => setMenuOpen(false)}>WORKSHEET</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
          <div className="mobile-social-icons">
          <a href="https://www.instagram.com/pooja_abhayk" target="_blank" rel="noopener noreferrer">
          <FaInstagram /></a>
          <a href="https://www.facebook.com/pooja.gahlot.127" target="_blank" rel="noopener noreferrer">
          <FaFacebookF /> </a>
          </div>
        </div>
      )}

      {/* Main Header: Logo, Search, Desktop Cart */}
      <div className="main-header">
         {/*
        <form className="search-bar" onSubmit={handleSearchSubmit}>
          <span className="search-label">SEARCH</span>
          <div className="search-box">
            <FaSearch className="search-icon" onClick={handleSearchSubmit} />
            <input
              type="text"
              placeholder=" "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
      */}

        <div className="logo">
          <h1>Pooja Abhay</h1>
          <p>Life ✦ Relationship Coach</p>
        </div>

        {/*<div className="cart desktop-cart">
          <FaShoppingCart className="cart-icon" />
          <span className="cart-count">0</span>
        </div>*/}
      </div>
    </header>
  );
};

export default Header;
