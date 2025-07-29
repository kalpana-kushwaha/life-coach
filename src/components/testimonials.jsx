import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bgImage from '/testimonial.png'; 

const testimonials = [
  // ...same testimonials data as before...
  {
    name: '',
    quote: `Thanks Pooja, Thanks for believing in me. The conversation with you  gave me all the more clarity and surity that with a supportive team like yours it is certainly doable....... 
    I was a little skeptical about a few things and you very beautiful were able to addess all my apprehensions. 
    I am sure I will have questions as I move ahead in the learning curve. .......Love, Gratitude and more power to you 🥰`,
  },
  {
    name: 'Abhay',
    quote: `I’ve seen you at your best when you’re deeply present with someone—just listening with your whole heart. That’s rare.
Whenever I feel stuck, you don’t try to fix things—you ask questions that help me think clearly.
What inspires me is your inner strength. Even in your own tough moments, you still show up for others.
You light up when someone says, ‘Pooja, you helped me see what I couldn’t before.’ That’s when I know—this is your calling.`,
  },
  {
    name: '',
    quote: `A heartfelt thank you to Pooja ma'am for creating such a safe, open, and reflective space during the session. Your words and insights gently pushed me to pause, question, and explore the layers I’ve been carrying for so long.
    Thank you for helping me see that it’s okay to not have all the answers right away—and that every step counts.
    Looking forward to this journey.I’m truly filled with gratitude🙏.`,
  },
  {
    name: '',
    quote: `Dear Pooja 💖
    It was really wonderful talking to you. Your  hand holding approach and a humble smile was really soothing. It made me so comfortable with you to have a professional chat and a personal one as well.
    I'm even more excited to be there. Really keen to step ahead in life for CHAPTER - 2 with you and all.`,
  },
  {
    name: '',
    quote: `Hi Pooja,
    Just wanted to say thanks for making me feel so comfortable during our call🫠. I loved how open and honest we could be, and your insights really helped me understand the value of life coaching. 
    Your story and experience as a coach were super inspiring, and I'm excited to learn more😇. You broke down the whole process in a way that made total sense, and I'm feeling confident about this journey. 
    Plus, thank you for clearing all my doubts – it really put my mind at ease🥰. Thanks again for your time and guidance – can't wait to get started!"`,
  },
  {
    name: '',
    quote: `A hearty❤ thanks, to you Pooja ma'am for your support as your cleared all my doubt.😊
    I love your realistic and sensible nature. I am so glad to have conversation with you that make clarity.
    It was so comfortable conversation as I am excited to learn a lot from your experience which Might inspired me as well
    Thank you for giving me such opportunities😊`,
  },
];

const Testimonials = ( { id = "testimonials" }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Touch refs for swipe
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Next testimonial
  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  // Previous testimonial
  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-advance every 8 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      next();
    }, 8000);

    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  // TOUCH HANDLERS (Safari compatible)
  const handleTouchStart = (e) => {
    // Always use clientX and .touches[0]
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e) => {
    // Update to the latest finger position
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    // If move event never fired, use changedTouches[0]
    const endX = touchEndX.current ?? (e.changedTouches && e.changedTouches[0]?.clientX);
    if (touchStartX.current === null || endX === null) return;

    const delta = touchStartX.current - endX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        next();   // Swipe left
      } else {
        prev();   // Swipe right
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id={id}
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
              // Optional: Click to go to specific slide
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
        <FaChevronRight className="testi-arrow" onClick={next} />
      </div>
    </section>
  );
};

export default Testimonials;
