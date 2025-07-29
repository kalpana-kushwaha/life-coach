import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CoachImage from '/coach.jpg';
import FlowerImage from '/flower.png';
import Coach2 from '/coach2.png';
import './Home.css';
import WhoSection from './who_section';
import Services from './service';
import Testimonials from './testimonials';
import Worksheet from './Worksheet';
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
            <h1 className="hero-title">
              You’re not “too emotional.” You’re deeply aware — and that awareness is calling for change.
            </h1>

            <p className="hero-script">
              If you’re tired of being the one who holds it all together while your heart feels unheard — know this: you’re not broken. You’ve just been surviving in spaces that didn’t feel safe to be your full self.
            </p>

            <p className="hero-script">
              But something’s shifting. You’re ready to stop overthinking, stop shrinking, and start showing up — fully.
            </p>

            <p className="hero-script">
              You don’t need to have it all figured out. Just a space safe enough to begin.
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
            {/*<img src={FlowerImage} alt="Flower" className="flower-img" />*/}
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
              <p className="about-role">I coach from experience, not from a pedestal.</p>
              {/*<p className="about-subline">
                Helping you go from “Why does this keep happening?” to “Now I get it. And I know what to do.”
              </p>*/}
            <div className="about-text">
                <p>There was a time I looked like I had it all together. But inside? I was burnt out.</p>

                <p>Not just tired—but emotionally exhausted from keeping it all in. I was the one who stayed quiet to avoid conflict. Who smiled to keep the peace. Who gave and gave… until I couldn’t hear my own voice anymore.</p>

                <p>That moment of burnout didn’t just break me — it woke me up. It made me ask:  
                <br />“Who am I… when I’m not performing strength for everyone else?”</p>

                <p>That question changed everything. My journey wasn’t about becoming perfect. It was about pausing. Learning to respond, not react. To stop proving, and start allowing. To stop shrinking, and start showing up fully — for myself.</p>

                <p>And now, I help women, professionals, and individuals just like you do the same. To feel their feelings without shame. To speak with honesty, not fear. To build relationships that feel mutual, safe, and nourishing.</p>

                <p>And most of all — to come home to themselves.</p>

                <p>This isn’t surface-level advice. This is deep, grounded, lasting work. And I’ll be beside you — not above you — every step of the way.</p>

                <p><strong>✨ You don’t need to hold it all alone anymore.</strong><br />Let’s begin together.</p>
              </div>

              <Link to="/contact"><button className="about-btn">REACH OUT</button></Link>
            </div>
          </div>
        </div>
      </section>
      <WhoSection id="who" />      
      <Services id="services" />
      <Testimonials id="testimonials" />
      <Worksheet id="freebie" />
      <FinalCTA id="finalcta" />
    </>
  );
};

export default Home;
