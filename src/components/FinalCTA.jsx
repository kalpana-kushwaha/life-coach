import './FinalCTA.css';
import coffeeImage from '/pic3.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: 'I don’t even know what I need right now. Is this still for me?',
    a: 'Yes. Most of my clients begin here—feeling confused, overwhelmed, or stuck. That’s exactly why we start with a clarity call. You don’t need to have it all figured out.',
  },
  {
    q: 'I’ve tried therapy or coaching before. How is this different?',
    a: 'This space is not about quick fixes or surface advice. My coaching is rooted in real-life emotional work—through stories, patterns, and communication tools that create lasting shifts, not just insights.',
  },
  {
    q: 'I feel like I’m “too much” or “too sensitive.” Will I be judged?',
    a: 'Not here. Sensitivity isn’t a weakness—it’s a gift. You’ll be seen, heard, and supported exactly as you are.',
  },
  {
    q: 'Do I have to open up completely in the first session?',
    a: 'No. You set the pace. We go gently, with honesty and trust. This is a space where you don’t have to perform or explain everything all at once.',
  },
  {
    q: 'How long is a typical 1:1 session?',
    a: 'Each session lasts 40 minutes—just enough time to unpack what\'s weighing you down and walk away feeling clearer and calmer.',
  },
  {
    q: 'How many sessions will I need to feel real change?',
    a: 'That depends on where you are. Many feel a shift even after one session, but for deeper transformation, I offer packages of 6–8 sessions.',
  },
  {
    q: 'What if I cry or get emotional during a session?',
    a: 'That’s welcomed here. Emotions are part of the process, not a problem.',
  },
  {
    q: 'Is this coaching only for women?',
    a: 'While I work closely with women, I also support men, couples, and professionals ready to do the inner work—especially around emotions and boundaries.',
  },
  {
    q: 'What happens after the clarity call?',
    a: 'If it feels aligned, you can book your first session right away. No pressure—just a clear path forward, with support.',
  },
  {
    q: 'What if I’m not sure I can invest in coaching right now?',
    a: 'Start with the free clarity call. It’s a space to reflect and understand what support you really need. Even if you don’t continue, you’ll walk away with insight.',
  },
];

export default function FinalCTA() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="final-cta-section">
      <div className="final-cta-wrapper">
        <img src={coffeeImage} alt="Coffee and notebook" className="final-cta-image" />
        <div className="final-cta-content">
          <p className="final-cta-overline">You’ve been strong for everyone else.</p>
          <h2 className="final-cta-heading">It’s time to be supported.</h2>
          <p className="final-cta-desc">
            You don’t need to keep figuring this out alone. Book your free clarity call. No pressure. Just space—for you.
          </p>
          <Link to="/contact">
            <button className="final-cta-button">Book Your Free Clarity Call</button>
          </Link>
        </div>
      </div>

      <div className="faq-section">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question-row">
                <p className="faq-question">{item.q}</p>
                <span className="faq-arrow">{openIndex === index ? '−' : '+'}</span>
              </div>
              {openIndex === index && <p className="faq-answer">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
