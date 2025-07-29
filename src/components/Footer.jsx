import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [showTermsModal, setShowTermsModal] = useState(false);

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
            <a href="https://www.instagram.com/pooja_abhayk" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/pooja.gahlot.127" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          </div>
        </div>

        <ul className="footer-links right">
          <li><Link to="/#testimonials">RESULTS</Link></li>
          <li><Link to="/#freebie">WORKSHEET</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>
      <div className="terms-wrapper">
        <span
          className="terms-highlight"
          onClick={() => setShowTermsModal(true)}
        >
          Terms & Conditions
        </span>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Pooja Abhay • All Rights Reserved</p><br/>
        <p>
          ✉ <a href="mailto:Poojaabhayk@gmail.com">Email</a> | 📍 Based in Gurugram | Sessions available worldwide
        </p>
      </div>

      {showTermsModal && (
        <div className="terms-modal-overlay">
          <div className="terms-modal">
            <h2>📜 Terms & Conditions</h2>
            <p>
              At SoulCode by Pooja Abhay, we believe in honest transformation—but we also believe in transparency.
              <br /><br />
              While our coaching, tools, and content are rooted in real-life emotional growth, we do not make any guarantees about your specific results, healing pace, or personal transformation. Everyone’s journey is deeply personal and depends on multiple factors like your emotional readiness, effort, life circumstances, and willingness to do the inner work.
              <br /><br />
              The information shared on this website, in our sessions, group programs, or workshops is intended for educational and emotional support purposes only. It is not a substitute for therapy, diagnosis, or professional mental health treatment.
              <br /><br />
              Any testimonials, stories, or feedback shared by clients reflect individual experiences and are not to be considered a promise or standard outcome.
              <br /><br />
              We are here to offer you safe spaces, heartfelt guidance, and practical tools that have supported transformation in many lives—including ours. However, your results are yours to shape.
              <br /><br />
              By engaging with this site or our services, you agree to take full responsibility for your growth journey and outcomes. Please read the full Privacy Policy and Terms of Use for detailed terms.
              <br /><br />
              We are committed to creating a space of honesty, empathy, and integrity. Thank you for being here—we hope this journey brings you closer to the clarity, confidence, and calm you're seeking.
            </p>
            <button className="okay-btn" onClick={() => setShowTermsModal(false)}>Okay</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
