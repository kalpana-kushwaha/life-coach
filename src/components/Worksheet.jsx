// src/components/FreebieSection.jsx
import './Worksheet.css';
import { Link } from 'react-router-dom';


const Worksheet = ({ id = "freebie" }) => {
  return (
    <section className="freebie-section" id={id}>
      <div className="freebie-container">
        <h2>Start with Clarity—Free Download</h2>
        <p className="subtitle">
          A quick, powerful worksheet to help you get clear on what you truly want from your relationships and self.
        </p>
        <div className="freebie-card">
          <p className="highlight"><strong>“What Do I Really Want?” Worksheet</strong></p>
          <p>Reflective prompts to bring your emotions, needs, and goals into focus.</p>
          <a href="/your-download.pdf" className="download-btn" download>
            Download Now Free
          </a>
        </div>
      </div>
    </section>
  );
};

export default Worksheet;