import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './service.css';
import { Link } from 'react-router-dom';

const ServicesSection = ({ id = "services" }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="services-section" id={id}>
      <h2 className="services-heading" data-aos="fade-up">What Working With Me Feels Like</h2>
      <p className="services-subheading" data-aos="fade-up">
        Support that meets you where you are—and helps you move forward.
      </p>

      <div className="services-grid">
        <div className="service-card" data-aos="fade-up">
          <div className="service-label">🧠 1:1 Coaching</div>
          <p className="service-description">
            These are safe, honest conversations to explore what’s really going on—and help you shift from emotional chaos to calm, connected action.
          </p>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
          <div className="service-label">👥 Group Coaching</div>
          <p className="service-description">
            You’ll realize you’re not alone. These sessions offer shared insights, compassionate support, and the power of real stories.
          </p>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="200">
          <div className="service-label">🎤 Workshops</div>
          <p className="service-description">
            Powerful and focused. Each one is designed to help you understand emotions, improve how you speak, and connect better—with yourself and others.
          </p>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <h3 className="services-cta">✨ Don’t know what you need? Start with a clarity call.</h3>
        <p className="cta-description">
          Book a free clarity call and let’s explore what support suits you best.
        </p>
        <Link to="/contact"><button className="cta-button">Book My Free Call</button></Link>
      </div>
    </section>
  );
};

export default ServicesSection;
