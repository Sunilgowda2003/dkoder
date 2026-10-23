
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  useEffect(() => {
    document.title = "About | Dkoder";
  }, []);

  return (
    <main className="about-page">
      {/* Hero section */}
      <section className="about-hero">
        <div className="about-container about-hero-grid">
          <div className="about-hero-content">
            <span className="about-eyebrow">ABOUT DKODER</span>

            <h1>
              Built for learners.
              <br />
              Designed for <span>developers.</span>
            </h1>

            <p className="about-intro">
              Your journey from curious learner to confident developer
              starts here. Practise your skills, solve challenges, and
              prepare for your next opportunity with DKoder.
            </p>

            <div className="about-actions">
              <Link to="/explore" className="about-btn about-btn-primary">
                Explore challenges <span>↗</span>
              </Link>

              <Link to="/practice" className="about-btn about-btn-secondary">
                Start practising →
              </Link>
            </div>
          </div>

          <div className="about-hero-visual" aria-hidden="true">
            <div className="about-visual-card">
              <div className="about-code-header">
                <span />
                <span />
                <span />
                <small>your-future.js</small>
              </div>

              <pre>
                <code>{`const developer = {
  curiosity: true,
  practice: "every day",
  goal: "build something great"
};

keepLearning();`}</code>
              </pre>

              <div className="about-code-footer">
                <span>✓</span> Keep learning. Keep building.
              </div>
            </div>

            <div className="about-floating-badge about-badge-top">
              <span>✦</span> Learn by doing
            </div>

            <div className="about-floating-badge about-badge-bottom">
              <span>⌘</span> Think. Code. Grow.
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="about-container about-mission-grid">
          <div>
            <span className="about-section-label">OUR MISSION</span>
            <h2>
              Turn practice into
              <span> progress.</span>
            </h2>
          </div>

          <p>
            DKoder is designed to give aspiring developers a place to
            practise programming concepts, improve problem-solving skills,
            and prepare for placement-style assessments. We believe
            consistent practice is an important step toward building
            confidence as a developer.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="about-features">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-section-label">THE DKODER EXPERIENCE</span>
            <h2>Everything starts with practice.</h2>
            <p>
              Explore the learning activities available in the current
              DKoder frontend.
            </p>
          </div>

          <div className="about-feature-grid">
            <article className="about-feature-card">
              <div className="about-feature-icon">✳</div>
              <h3>Practice MCQs</h3>
              <p>
                Answer sample multiple-choice questions and review
                explanations and scoring.
              </p>
              <Link to="/practice" className="about-feature-link">
                Explore practice →
              </Link>
            </article>

            <article className="about-feature-card">
              <div className="about-feature-icon">&lt;/&gt;</div>
              <h3>Coding challenges</h3>
              <p>
                Search, filter, sort, and open coding challenge details
                to explore programming problems.
              </p>
              <Link to="/explore" className="about-feature-link">
                Browse challenges →
              </Link>
            </article>

            <article className="about-feature-card">
              <div className="about-feature-icon">☆</div>
              <h3>Save challenges</h3>
              <p>
                Save challenges for later. Saved items are stored in
                your browser's local storage.
              </p>
              <Link to="/explore" className="about-feature-link">
                Find a challenge →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="about-vision">
        <div className="about-container about-vision-inner">
          <span className="about-section-label">LOOKING AHEAD</span>
          <h2>Small steps today. Stronger skills tomorrow.</h2>
          <p>
            Our vision is to grow DKoder into a useful learning
            destination for aspiring developers, with more opportunities
            to practise, learn, and prepare for technical careers.
          </p>

          <Link to="/explore" className="about-btn about-btn-primary">
            Start your journey <span>↗</span>
          </Link>
        </div>
      </section>

      {/* Current status */}
      <section className="about-status">
        <div className="about-container about-status-inner">
          <div>
            <span className="about-status-dot" />
            <strong>Current platform status</strong>
          </div>

          <p>
            This is a frontend-only project using sample content.
            Accounts, backend services, server-side submissions, and
            code execution are not currently implemented.
          </p>
        </div>
      </section>
    </main>
  );
}
