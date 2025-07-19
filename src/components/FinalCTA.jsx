import './FinalCTA.css';
import coffeeImage from '/coffee.jpg';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="final-cta-wrapper">
        <img src={coffeeImage} alt="Coffee and notebook" className="final-cta-image" />
        <div className="final-cta-content">
          <p className="final-cta-overline">You’ve been strong for everyone else.</p>
          <h2 className="final-cta-heading"> It’s time to be supported.</h2>
          <p className="final-cta-desc">
            You don’t need to keep figuring this out alone. Book your free clarity call. No pressure. Just space—for you.
          </p>
          <Link to="/contact"><button className="final-cta-button">Book Your Free Clarity Call</button></Link>
        </div>
      </div>
    </section>
  );
}
