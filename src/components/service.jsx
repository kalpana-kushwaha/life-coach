import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './service.css';
import { Link } from 'react-router-dom';
import video from '/video.mp4';

const ServicesSection = ({ id = "services" }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  // Auto-play on scroll into view
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          vid.play();
        } else {
          vid.pause();
        }
      },
      { threshold: 0.5 } // 50% visible = play
    );

    observer.observe(vid);
    return () => observer.disconnect();
  }, []);
  // Auto-unmute when user increases volume
useEffect(() => {
  const vid = videoRef.current;
  if (!vid) return;

  const handleVolumeChange = () => {
    if (vid.volume > 0 && vid.muted) {
      vid.muted = false;
    }
  };

  vid.addEventListener("volumechange", handleVolumeChange);

  return () => {
    vid.removeEventListener("volumechange", handleVolumeChange);
  };
}, []);


  return (
    <section className="services-section" id={id}>
      <h2 className="services-heading" data-aos="fade-up">
        What Working With Me Feels Like
      </h2>
      <p className="services-subheading" data-aos="fade-up">
        Support that meets you where you are—and helps you move forward.
      </p>

      <div className="services-grid">
        <div className="service-card" data-aos="fade-up">
          <div className="service-label">🗣️ 1:1 Coaching</div>
          <p className="service-description">
            <strong>You don’t have to hold it all together anymore.</strong><br /><br />
            These private sessions are your safe space to pause, process, and finally speak your truth — without fear or filters. <br />
            We’ll move from overwhelm to clarity, and from people-pleasing to powerful self-expression. <br />
            <strong> One honest conversation can change everything.</strong>
          </p>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
          <div className="service-label">👥 Group Coaching</div>
          <p className="service-description">
            <strong>You’re not the only one who feels this way — and that changes everything.</strong><br /><br />
            Inside these sessions, real stories meet real healing. <br />
            You’ll be seen, heard, and supported by a circle that just gets it. Because growth feels safer — and stronger — when we rise together. <br />
            <strong>Come for the clarity, stay for the connection.</strong>
          </p>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="200">
          <div className="service-label">📝 Workshops</div>
          <p className="service-description">
            <strong>A single session. <br/>A deep shift.</strong><br /><br />
            These aren’t just workshops — they’re wake-up calls. <br />
            Each one helps you decode your emotions, speak with confidence, and build real, honest connections. <br />
            No fluff. Just focused transformation in a short time. <br />
            <strong>Walk in with questions. Walk out with clarity.</strong>
          </p>
        </div>
      </div>

      {/* Local Video Section */}
      <div className="local-video-container" data-aos="fade-up" data-aos-delay="250">
        <h3 className="video-heading">A Glimpse Into the Journey</h3>
        <p className="video-subtext">
          Watch how transformation begins in just one conversation.
        </p>
        <div className="video-wrapper">
          <video
            ref={videoRef}
            playsInline
            muted         
            controls
            className="styled-video"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <h3 className="services-cta">Not sure what you need? Let’s find the path together.</h3>
        <p className="cta-description">
          A free clarity call to help you understand where you are and where you’re ready to go.
        </p>
        <Link to="/contact">
          <button className="cta-button">Book My Free Call</button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
