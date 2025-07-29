import React, { useRef } from 'react';
import ProfileImage from '/coach2.png'; 
import {
  FaInstagram, FaFacebookF} from 'react-icons/fa';
import Footer from './Footer';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_q0h3o54',    
      'template_5sv4sdj',    
      form.current,
      'nwv_9ZULVo5kmFFLW'      
    ).then(
      () => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        console.error(error.text);
        alert('Failed to send message. Please try again later.');
      }
    );
  };

  return (
    <>
      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-left">
          <div className="contact-banner">
            <h2 className="contact-title">CONTACT</h2>
          </div>
          <div className="contact-photo-box">
            <img src={ProfileImage} alt="Leyla Stuart" className="contact-photo" />
          </div>
          <h3 className="contact-name">LEYLA STUART</h3>
          <p className="follow-text">follow</p>
          <div className="social-icons-contact">
          <a href="https://www.instagram.com/pooja_abhayk" target="_blank" rel="noopener noreferrer">
          <FaInstagram /></a>
          <a href="https://www.facebook.com/pooja.gahlot.127" target="_blank" rel="noopener noreferrer">
          <FaFacebookF /> </a> 
          </div>
        </div>

        {/* Right Section */}
        <div className="contact-right">
          <p className="response-note">Current Response Time: 1-3 business days</p>
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <div className="form-row">
              <input type="text" name="first_name" placeholder="First Name" required />
              <input type="text" name="last_name" placeholder="Last Name" required />
            </div>
            <input type="email" name="email" placeholder="Email *" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" rows="6" placeholder="Write a message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
