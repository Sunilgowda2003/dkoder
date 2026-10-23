import { Link } from "react-router-dom";
import "./Footer.css";

const studentLinks = [
  { label: "Practice", to: "/practice" },
  { label: "Coding practice", to: "/explore" },
  { label: "Platform arena", to: "/explore" },
  { label: "Challenges", to: "/explore" },
  { label: "Leaderboard", to: null },
  { label: "Courses", to: null },
  { label: "Events", to: null },
  { label: "Resources", to: null },
  { label: "Verify a certificate", to: null },
  { label: "Pricing", to: null },
];

const institutionLinks = [
  { label: "Dkoder for colleges", to: null },
  { label: "Apply for MOU", to: null },
  { label: "Host a hackathon", to: null },
  { label: "Benefits for institutions", to: null },
  { label: "Institution sign-in", to: null },
];

const programmeLinks = [
  { label: "Hackathons", to: null },
  { label: "100 Days of Sustainability", to: null },
  { label: "Final Year Projects", to: null },
  { label: "Topic certifications", to: null },
  { label: "Technology certifications", to: null },
];

const supportLinks = [
  { label: "Contact support", href: "mailto:support@dkoder.co.in" },
  { label: "Chat on WhatsApp", href: null },
  { label: "Sign in", to: null },
  { label: "Create an account", to: null },
];

function FooterColumn({ icon, title, links }) {
  return (
    <div className="ftr-column">
      <h3 className="ftr-column-title">
        <span className="ftr-round-icon" aria-hidden="true">
          {icon}
        </span>
        {title}
      </h3>

      <nav aria-label={title}>
        <ul className="ftr-links">
          {links.map((item) => (
            <li key={item.label}>
              {item.to ? (
                <Link className="ftr-link" to={item.to}>
                  {item.label}
                </Link>
              ) : item.href ? (
                <a className="ftr-link" href={item.href}>
                  {item.label}
                </a>
              ) : (
                <span className="ftr-coming-soon">
                  {item.label}
                  <span className="ftr-soon-label">Soon</span>
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function ContactCard({ icon, label, value, href }) {
  const content = (
    <>
      <span className="ftr-contact-icon" aria-hidden="true">
        {icon}
      </span>

      <span className="ftr-contact-copy">
        <span className="ftr-contact-label">{label}</span>
        <span className="ftr-contact-value">{value}</span>
      </span>

      <span className="ftr-arrow" aria-hidden="true">
        ↗
      </span>
    </>
  );

  if (!href) {
    return <div className="ftr-contact-card">{content}</div>;
  }

  return (
    <a className="ftr-contact-card" href={href}>
      {content}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="ftr" id="contact">
      <div className="ftr-wrap">
        <div className="ftr-contact-grid">
          <ContactCard
            icon="☎"
            label="CALL US"
            value="+91 87542 00247"
            href="tel:+918754200247"
          />

          <ContactCard
            icon="◉"
            label="WHATSAPP"
            value="Chat with our team"
          />

          <ContactCard
            icon="✉"
            label="EMAIL SUPPORT"
            value="support@dkoder.co.in"
            href="mailto:support@dkoder.co.in"
          />
        </div>

        <div className="ftr-divider" />

        <div className="ftr-main">
          <div className="ftr-brand">
            <Link to="/" className="ftr-logo">
              <span className="ftr-logo-symbol" aria-hidden="true">
                {"</>"}
              </span>
              <span>Dkoder</span>
            </Link>

            <p className="ftr-description">
              Dkoder is a placement-readiness platform for students and
              colleges across India: company-oriented practice, coding
              challenges, mock exams and learning resources.
            </p>

            <div className="ftr-address">
              <span className="ftr-address-icon" aria-hidden="true">
                ⌖
              </span>

              <div>
                <strong>Our office</strong>
                <address>
                  Campus 1A, No. 143, Dr. M.G.R. Road,
                  Perungudi, Chennai 600096, Tamil Nadu.
                </address>
              </div>
            </div>

            <a
              className="ftr-partner"
              href="mailto:support@dkoder.co.in?subject=Partnership%20Enquiry"
            >
              <span aria-hidden="true">🤝</span>
              Partner with us
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <FooterColumn
            icon="♙"
            title="For students"
            links={studentLinks}
          />

          <FooterColumn
            icon="▤"
            title="For institutions"
            links={institutionLinks}
          />

          <FooterColumn
            icon="♜"
            title="Programmes"
            links={programmeLinks}
          />

          <FooterColumn
            icon="☏"
            title="Help & support"
            links={supportLinks}
          />
        </div>

        <div className="ftr-bottom">
          <p>
            © {new Date().getFullYear()} Dkoder. All rights reserved.
          </p>

          <div className="ftr-legal">
            <Link to="/about">About Dkoder</Link>
            <a href="mailto:support@dkoder.co.in">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}