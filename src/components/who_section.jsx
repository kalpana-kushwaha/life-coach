import React, { useEffect, useState } from 'react';
import './Who_section.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaRegCommentDots,
  FaBrain,
  FaHandsHelping,
  FaMicrophoneSlash,
  FaLeaf
} from 'react-icons/fa';

const cards = [
  {
    title: 'The Silent Resistor',
    icon: <FaRegCommentDots />,
    front: 'You stay quiet to avoid conflict, but it leaves you resentful.',
    backHeading: 'Your Voice Matters',
    backText:
      "Learn to express yourself with clarity, courage, and compassion —  because your voice and truth truly matter",
  },
  {
    title: 'The Overthinker',
    icon: <FaBrain />,
    front: 'You replay conversations in your mind, wondering if you were too much—or not enough.',
    backHeading: 'You Are Enough',
    backText:
      "Free yourself from self-doubt and the endless 'what ifs'. Embrace radical self-acceptance and start showing up as you are.",
  },
  {
    title: 'The Empathetic Anchor',
    icon: <FaHandsHelping />,
    front: 'You always show up for others, but feel emotionally exhausted.',
    backHeading: 'Your Needs Matter Too',
    backText:
      'Set loving boundaries and reclaim your energy — so you can give from fullness, not obligation.',
  },
  {
    title: 'The Invisible Voice',
    icon: <FaMicrophoneSlash />,
    front: 'You want to speak up, but fear being misunderstood.',
    backHeading: 'Be Heard Fully',
    backText:
      'You deserve to be fully seen and heard — without judgment. Reclaim your voice and connect with confidence.',
  },
  {
    title: 'The Inner Healer',
    icon: <FaLeaf />,
    front: 'You’re ready to break old cycles and finally feel calm, heard, and confident.',
    backHeading: 'This Is Your Moment',
    backText:
      'This is your turning point. Step forward with peace, purpose, and self-trust — the change begins within.',
  },
];

const WhoThisIsFor = ({ id = 'who' }) => {
  const [flippedIndexes, setFlippedIndexes] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleCardClick = (index) => {
    setFlippedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="who-section" id={id}>
      <h2 className="who-heading">Is This You?</h2>

      <div className="who-cards-container">
        {cards.map((card, index) => (
          <div
            className="who-flip-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            onClick={() => handleCardClick(index)}
          >
            <div
              className={`who-flip-inner ${flippedIndexes.includes(index) ? 'is-flipped' : ''}`}
            >
              <div className="who-flip-front">
                <div className="who-icon">{card.icon}</div>
                <h4 className="who-tone-title">{card.title}</h4>
                <p className="who-text">{card.front}</p>
              </div>
              <div className="who-flip-back">
                <h5 className="who-back-heading">{card.backHeading}</h5>
                <p className="who-text">{card.backText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="who-footer-text">
        You don’t need fixing. You need space, clarity, and the right support.
      </p>
    </section>
  );
};

export default WhoThisIsFor;
