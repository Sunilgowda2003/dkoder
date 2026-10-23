import { Link } from "react-router-dom";
import { useEffect } from "react";
import { challenges } from "../data/challenges.js";
import ChallengeCard from "../components/ChallengeCard.jsx";
import useReveal from "../hooks/useReveal.js";
import useTyping from "../hooks/useTyping.js";
import useSaved from "../hooks/useSaved.js";
import "./Home.css";

const CODE = `const you = {
  curious: true,
  next: "build something",
};

ship(you);`;

const steps = [
  {
    icon: "✳",
    title: "Practise smarter",
    description:
      "Build confidence with aptitude, reasoning, and technical MCQs.",
    to: "/practice",
    action: "Start practising",
  },
  {
    icon: "</>",
    title: "Think like a developer",
    description:
      "Explore coding challenges and improve your problem-solving skills.",
    to: "/explore",
    action: "Explore challenges",
  },
  {
    icon: "◷",
    title: "Prepare with purpose",
    description:
      "Take timed mock exams, review your answers, and learn from results.",
    to: "/mock-exams",
    action: "Explore mock exams",
  },
];

export default function Home() {
  const [saved, toggle] = useSaved();
  const typed = useTyping(CODE);

  useReveal();

  useEffect(() => {
    document.title = "Dkoder | Learn boldly. Build something remarkable.";
  }, []);

  return (
    <main className="dk-home">
      {/* Main hero */}
      <section className="dk-hero">
        <div className="dk-hero__grid" aria-hidden="true" />

        <div className="dk-hero__bubble dk-hero__bubble--question">
          <p>
            I want to become a game developer. Can you guide me?
          </p>
        </div>

        <div className="dk-hero__bubble dk-hero__bubble--answer">
          <p>Sure, I will.</p>
        </div>

        {/* Hero illustration stored in the public folder */}
<div className="dk-hero__visual" aria-hidden="true">
  <img
    src="/Collaborative%20Learning%20with%20a%20Friendly%20Robot.png"
    alt="Students learning technology with a friendly robot"
    className="dk-hero__image"
    fetchPriority="high"
    onError={(e) => {
      console.error("Hero image failed to load:", e.currentTarget.src);
    }}
  />
</div>

        <div className="dk-hero__content">
          <span className="dk-hero__eyebrow">
            YOUR JOURNEY STARTS HERE
          </span>

          <h1>
            Learn boldly.
            <br />
            Build something
            <br />
            <span>remarkable.</span>
          </h1>

          <p className="dk-hero__description">
            Turn curiosity into capability. Practise placement-style
            aptitude, MCQs, and coding challenges, and build skills
            for your next opportunity.
          </p>

          <div className="dk-hero__actions">
            <Link
              className="dk-hero__button dk-hero__button--primary"
              to="/explore"
            >
              Explore challenges <span aria-hidden="true">↗</span>
            </Link>

            <Link
              className="dk-hero__button dk-hero__button--secondary"
              to="/practice"
            >
              Start practising <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="dk-hero__note">
            <span aria-hidden="true">✦</span>
            Learn at your pace. Build your future.
          </div>

          {/* Existing typing animation retained */}
          <div
            className="dk-hero__code"
            role="img"
            aria-label="Decorative JavaScript terminal animation"
          >
            <div className="dk-hero__code-bar" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>your-next.js</span>
            </div>

            <pre aria-hidden="true">
              {typed}
              <span className="dk-hero__cursor">▍</span>
            </pre>
          </div>
        </div>

        <div className="dk-hero__scroll" aria-hidden="true">
          <span />
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* Feature cards */}
      <section className="dk-home__features">
        <div className="dk-home__section-heading rv">
          <span>YOUR NEXT CHAPTER</span>
          <h2>Curiosity is just the beginning.</h2>
          <p>
            Find your path, sharpen your skills, and prepare for
            your next opportunity.
          </p>
        </div>

        <div className="dk-home__feature-grid">
          {steps.map((step) => (
            <Link
              key={step.title}
              to={step.to}
              className="dk-feature-card rv"
            >
              <span className="dk-feature-card__icon" aria-hidden="true">
                {step.icon}
              </span>

              <h3>{step.title}</h3>
              <p>{step.description}</p>

              <span className="dk-feature-card__link">
                {step.action} ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Existing saved challenge functionality retained */}
      <section className="section dark">
        <div className="wrap">
          <h2 className="rv">Sample challenges</h2>

          <p className="rv">
            Explore sample problems, save your favourites, and return
            to them later. Saved items are stored in this browser.
          </p>

          <div className="grid">
            {challenges.slice(0, 3).map((challenge) => (
              <ChallengeCard
                key={challenge.id}
                c={challenge}
                saved={saved.includes(challenge.id)}
                onToggle={toggle}
              />
            ))}
          </div>

          <div className="dk-home__more">
            <Link className="btn on" to="/explore">
              View all challenges ↗
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="dk-home__closing">
        <div className="dk-home__closing-inner rv">
          <span>YOUR NEXT STEP STARTS HERE</span>
          <h2>Have an idea? Make it real.</h2>
          <p>
            Start with one question. Keep learning. See how far you can go.
          </p>

          <div className="dk-hero__actions">
            <Link
              className="dk-hero__button dk-hero__button--primary"
              to="/practice"
            >
              Start practising →
            </Link>

            <Link
              className="dk-hero__button dk-hero__button--secondary"
              to="/mock-exams"
            >
              Try a mock exam
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}