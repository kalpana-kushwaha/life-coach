import React, { useEffect } from 'react';
import './Who_section.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cards = [
  {
    title: "You’re Always Holding It Together",
    content: "For work. For family. For everyone.\nBut inside? You feel unseen. Unheard.\nYou’re tired of being the strong one all the time.",
  },
  {
    title: "You Overthink Everything",
    content: "You replay conversations.\nYou hold back to avoid conflict.\nAnd sometimes… you wonder if you feel too much.",
  },
  {
    title: "You Give A Lot — And Still Feel Not Enough",
    content: "You say yes when you mean no.\nYou try to keep everyone happy.\nBut deep down, you wonder — “What about me?”",
  },
  {
    title: "You’re Not Weak — You’re Just Tired",
    content: "Tired of pretending.\nTired of holding it all in.\nTired of being the peacekeeper while losing your own peace.",
  },
  {
    title: "You’re Ready For More",
    content: "More calm. More clarity.\nMore honest connections.\nAnd most of all — to feel like you again.",
  },
  {
    title: "You Crave Inner Peace — Not Just Productivity",
    content: "You’re done measuring worth by to-do lists.\nYou want peace, presence, and purpose.\nYou’re ready to live — not just cope."
  },
];

const WhoThisIsFor = ({ id = 'who' }) => {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <section className="who-section" id={id}>
      <div className="decorative-blob blob-top-left"></div>
      <div className="decorative-blob blob-bottom-right"></div>

      <h2 className="who-heading">Is This You?</h2>
      <p className="who-subheading">
        If you’ve felt any of this... you’re not alone.
      </p>

      <div className="who-cards-container">
        {cards.map((card, index) => (
          <div
            className="who-static-card"
            key={index}
            data-aos={index < cards.length / 2 ? 'fade-right' : 'fade-left'}
            data-aos-delay={index * 100}
          >
            <h4 className="who-tone-title">{card.title}</h4>
            <p className="who-text">{card.content}</p>
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
