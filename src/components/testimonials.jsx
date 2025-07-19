import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import bgImage from '/testimonial.png'; 

const testimonials = [
  {
    name: 'Pooja Chhabria',
    quote: `Your calm presence and non-judgmental space made it easy for me to open up. Each session brought clarity and a deeper connection to myself.
You have an incredible gift for understanding emotions and offering just the right guidance at the right time.
What I value most is how you always believed in me—reminding me of my strength when I couldn’t see it myself.
Thank you for being a constant, compassionate support. You’ve helped me grow and reconnect with who I truly am.`,
  },
  {
    name: 'Abhay',
    quote: `I’ve seen you at your best when you’re deeply present with someone—just listening with your whole heart. That’s rare.
Whenever I feel stuck, you don’t try to fix things—you ask questions that help me think clearly.
What inspires me is your inner strength. Even in your own tough moments, you still show up for others.
You light up when someone says, ‘Pooja, you helped me see what I couldn’t before.’ That’s when I know—this is your calling.`,
  },
  {
    name: 'Shweta',
    quote: `You’ve always been that friend who listens without judgment. I’ve come to you in moments of confusion, overthinking, or just needing to cry—and you’ve held it all with love.
You gently help people see their truth without making them feel wrong.
You truly care—from close friends to strangers. You light up when you talk about healing and self-worth.
You’ve made it safe for me to be vulnerable. This is your heart’s work, and you’re meant for it.`,
  },
  {
    name: 'Niharika',
    quote: `I didn’t fully understand what you did at first—but I saw how people felt after talking to you: calmer, clearer. Even I’ve felt that.
Your quiet support—just being there without pushing—has meant a lot.
What inspires me is how safe you make people feel, even in their most vulnerable moments.
You light up when someone has even the tiniest breakthrough. It’s clear—this work is truly meant for you.`,
  },
  {
    name: 'Shashmita',
    quote: `You’ve always been my go-to when I couldn’t find the words for what I was feeling—you just got it, without me having to explain.
You supported me when I didn’t even realise I needed it, holding space with quiet strength.
What inspires me is that you lead from experience, not just knowledge.
You come alive when you’re helping someone reconnect with themselves. And no matter how big this journey gets, I know you’ll stay real—that’s who you are.`,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      next();
    }, 8000);

    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        // Swiped left
        next();
      } else {
        // Swiped right
        prev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="testi-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2 className="testi-heading">What People Say</h2>
      <div
        className="testi-container fixed-height"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="testi-card">
          <p className="testi-quote">“{testimonials[current].quote}”</p>
          <p className="testi-name">— {testimonials[current].name}</p>
        </div>
      </div>

      <div className="testi-controls">
        <FaChevronLeft className="testi-arrow" onClick={prev} />
        <div className="testi-dots">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`testi-dot ${index === current ? 'active' : ''}`}
            />
          ))}
        </div>
        <FaChevronRight className="testi-arrow" onClick={next} />
      </div>
    </section>
  );
};

export default Testimonials;