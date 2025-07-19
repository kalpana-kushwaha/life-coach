import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CoachImage from '/coach.png';
import FlowerImage from '/flower.png';
import Coach2 from '/coach2.png';
import './Home.css';
import WhoSection from './who_section';
import Services from './service';
import Testimonials from './testimonials';
import Freebie from './FreebieSection';
import FinalCTA from './FinalCTA';
import { Link } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Allow DOM render
      }
    }
  }, [location]);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-replica">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">You’re not too sensitive. You’re deeply intuitive — and ready for change.</h1>
            <p className="hero-script">
              If your relationships feel like a constant loop of miscommunication, if you’re tired of being the one who “holds it together,” and if your silence has become louder than your words—this space is for you.

            </p>
           <p className="hero-subheadline">
              Let’s move from emotional chaos to calm, from overthinking to clarity, and from people-pleasing to powerful self-expression.
            </p>
            <Link to="/contact">
              <button className="hero-cta">Book Your Free Clarity Call</button>
            </Link>
            <p className="hero-subheadline shift-message">
              You’ve carried it long enough. Let this be the conversation that starts your shift.<br />
              One honest conversation can shift everything.
            </p>

            <div className="sparkle sparkle-1">✦</div>
            <div className="sparkle sparkle-2">✦</div>
          </div>
          <div className="hero-right">
            <img src={CoachImage} alt="Coach" className="coach-img" />
            <img src={FlowerImage} alt="Flower" className="flower-img" />
          </div>
        </div>
      </section>

      {/* Elevate Section */}
      <section className="elevate-section">
        <div className="sparkle sparkle-left">✦</div>
        <div className="sparkle sparkle-right">✦</div>
        <div className="sparkle sparkle-bottom">✦</div>
        <h2 className="elevate-heading">ELEVATE YOUR LIFE</h2>
        <p className="elevate-subheading">ONE STEP AT A TIME</p>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-left">
            <div className="image-wrapper">
              <img src={Coach2} alt="Coach" className="coach-photo" />
              <div className="beige-bg-corner"></div>
            </div>
          </div>
          <div className="about-right">
            <h2 className="about-welcome">Welcome</h2>
            <div className="about-card">
              <h1 className="about-name">Hi, I’m Pooja</h1>
              <p className="about-role">I coach from experience, not a pedestal.</p>
              {/*<p className="about-subline">
                Helping you go from “Why does this keep happening?” to “Now I get it. And I know what to do.”
              </p>*/}
              <div className="about-text">
                <p>I know what it feels like to overthink every word, stay quiet to keep the peace, or give so much that you forget your own needs.</p>

                <p>My journey wasn’t about being perfect—it was about learning how to respond instead of react. To stop proving, and start allowing. To choose clarity over chaos, and self-trust over self-doubt.</p>

                <p>Now I help women and individuals like you build real emotional strength, healthier communication, and relationships that feel safe, honest, and mutual.</p>

                <p>This isn’t surface-level advice. This is deep, grounded, lasting work. And I’ll be with you through it.</p>
              </div>
              <Link to="/contact"><button className="about-btn">REACH OUT</button></Link>
            </div>
          </div>
        </div>
      </section>
      <WhoSection id="who" />      
      <Services id="services" />
      <Testimonials id="testimonials" />
      <Freebie id="freebie" />
       <FinalCTA id="finalcta" />
    </>
  );
};

export default Home;
