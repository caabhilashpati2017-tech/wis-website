export default function App() {
  const whatsappLink =
    "https://wa.me/919040467041?text=Hello%20Abhilash%20Sir%2C%20I%20want%20a%20free%20portfolio%20review%20and%20investment%20consultation.";

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.logo}>WIS</h1>
          <p style={styles.logoSub}>Wealthverse Investment Solution</p>
        </div>
        <nav style={styles.nav}>
          <a href="#services" style={styles.navLink}>Services</a>
          <a href="#why" style={styles.navLink}>Why WIS</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroText}>
          <p style={styles.badge}>CA-Led Wealth Planning • Research Driven • Goal Based</p>
          <h2 style={styles.heroTitle}>Plan Your Wealth With Clarity, Confidence & Smart Research</h2>
          <p style={styles.heroPara}>
            WIS helps first-time investors, salaried individuals, retirees, HNIs, Trusts and AOPs
            build structured investment plans for long-term wealth creation, children’s future,
            tax efficiency and peaceful retirement.
          </p>

          <div style={styles.buttons}>
            <a href={whatsappLink} style={styles.primaryBtn}>Get Your Free Portfolio Review</a>
            <a href={whatsappLink} style={styles.secondaryBtn}>Start Consultation on WhatsApp</a>
          </div>
        </div>

        <div style={styles.profileCard}>
          <div style={styles.profileCircle}>AP</div>
          <h3>Abhilash Pati</h3>
          <p>Chartered Accountant</p>
          <p>Certified Mutual Fund & SIF Distributor</p>
          <p>Certified Research Analyst</p>
        </div>
      </section>

      <section style={styles.audience}>
        <h2 style={styles.sectionTitle}>Who We Serve</h2>
        <div style={styles.grid}>
          {["First-time Investors", "Salaried Individuals", "Retirees", "HNIs", "Trusts / AOPs"].map((item) => (
            <div style={styles.smallCard} key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section id="services" style={styles.section}>
        <h2 style={styles.sectionTitle}>Premium Wealth Services</h2>
        <div style={styles.cards}>
          <Card title="Wealth Management" text="Structured wealth planning designed around your financial goals and risk profile." />
          <Card title="Goal-Based Investing" text="Plan for children’s education, retirement, major purchases and long-term milestones." />
          <Card title="Tax Planning" text="Tax-aware investment structuring to improve post-tax outcomes." />
          <Card title="Retirement Planning" text="Build a peaceful retirement roadmap with stable cash flow and capital protection focus." />
          <Card title="Financing Guidance" text="Smart guidance on financial decisions, loans and capital allocation." />
          <Card title="Research-Based Investing" text="Technology-driven, new-age research approach for better decision-making." />
        </div>
      </section>

      <section id="why" style={styles.why}>
        <h2 style={styles.sectionTitle}>Why Choose WIS?</h2>
        <div style={styles.cards}>
          <Card title="CA-Led Advice" text="Financial guidance backed by professional qualification and disciplined analysis." />
          <Card title="Smartwork Over Hardwork" text="We believe wealth grows through smart planning, not random investing." />
          <Card title="Client-Specific Planning" text="Every portfolio is designed according to the client’s needs, goals and future priorities." />
        </div>
      </section>

      <section style={styles.testimonials}>
        <h2 style={styles.sectionTitle}>Client Experiences</h2>
        <div style={styles.cards}>
          <div style={styles.testimonial}>
            “Savings was difficult before, but after partnering with WIS it has become auto-driven.”
          </div>
          <div style={styles.testimonial}>
            “Last year I had to pay tax of ₹60,000 because of FD interest. This year it is less than ₹5,000 while receiving similar income — great tax planning.”
          </div>
        </div>
      </section>

      <section style={styles.socialSection}>
        <h2>Learn Finance in 30 Seconds</h2>
        <p>
          Subscribe to our YouTube channel and follow us on Instagram for simple, practical finance education.
        </p>
        <div style={styles.buttons}>
          <a href="https://www.youtube.com/@Wealthverseinvestmentsolution" style={styles.secondaryBtn}>YouTube</a>
          <a href="https://instagram.com/wealthverseinvest" style={styles.secondaryBtn}>Instagram</a>
        </div>
      </section>

      <section id="contact" style={styles.contact}>
        <h2>Start Your Wealth Journey</h2>
        <p><strong>Abhilash Pati</strong> — Chartered Accountant</p>
        <p>Sambalpur, Odisha</p>
        <p>Phone: +91-9040467041</p>
        <p>Email: caabhilashpati2017@gmail.com</p>
        <a href={whatsappLink} style={styles.primaryBtn}>Explore Your Investment Plan</a>
      </section>

      <a href={whatsappLink} style={styles.floatingWhatsApp}>WhatsApp</a>

      <footer style={styles.footer}>
        Disclaimer: Investments are subject to market risks. Past performance does not guarantee future returns.
        Please consult before making investment decisions.
      </footer>
    </div>
  );
}

function Card({ title, text }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(135deg, #020617, #0f172a, #111827)",
    color: "white",
    minHeight: "100vh",
  },
  header: {
    padding: "22px 8%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    flexWrap: "wrap",
    gap: "15px",
  },
  logo: {
    color: "#facc15",
    fontSize: "38px",
    margin: 0,
  },
  logoSub: {
    color: "#cbd5e1",
    margin: 0,
  },
  nav: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  navLink: {
    color: "#e2e8f0",
    textDecoration: "none",
  },
  hero: {
    padding: "80px 8%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    flexWrap: "wrap",
  },
  heroText: {
    maxWidth: "720px",
  },
  badge: {
    color: "#facc15",
    fontWeight: "bold",
  },
  heroTitle: {
    fontSize: "54px",
    lineHeight: "1.08",
    margin: "18px 0",
  },
  heroPara: {
    color: "#cbd5e1",
    fontSize: "18px",
    lineHeight: "1.7",
  },
  buttons: {
    display: "flex",
    gap: "15px",
    marginTop: "28px",
    flexWrap: "wrap",
  },
  primaryBtn: {
    background: "#facc15",
    color: "#020617",
    padding: "14px 24px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "bold",
    display: "inline-block",
  },
  secondaryBtn: {
    border: "1px solid rgba(255,255,255,0.25)",
    color: "white",
    padding: "14px 24px",
    borderRadius: "12px",
    textDecoration: "none",
    display: "inline-block",
  },
  profileCard: {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(250,204,21,0.25)",
    padding: "32px",
    borderRadius: "24px",
    width: "280px",
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
  },
  profileCircle: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    background: "#facc15",
    color: "#020617",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "34px",
    fontWeight: "bold",
    margin: "0 auto 18px",
  },
  audience: {
    padding: "50px 8%",
  },
  section: {
    padding: "60px 8%",
  },
  sectionTitle: {
    fontSize: "34px",
    marginBottom: "25px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "18px",
  },
  smallCard: {
    background: "rgba(250,204,21,0.1)",
    border: "1px solid rgba(250,204,21,0.25)",
    padding: "16px 22px",
    borderRadius: "14px",
    color: "#fde68a",
  },
  cards: {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
  },
  card: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "26px",
    borderRadius: "18px",
    width: "285px",
    color: "#cbd5e1",
  },
  why: {
    padding: "60px 8%",
    background: "rgba(255,255,255,0.03)",
  },
  testimonials: {
    padding: "60px 8%",
  },
  testimonial: {
    background: "rgba(15,23,42,0.85)",
    borderLeft: "4px solid #facc15",
    padding: "26px",
    borderRadius: "14px",
    width: "420px",
    color: "#e2e8f0",
    lineHeight: "1.6",
  },
  socialSection: {
    margin: "40px 8%",
    padding: "45px",
    borderRadius: "24px",
    background: "linear-gradient(135deg, rgba(250,204,21,0.16), rgba(59,130,246,0.12))",
  },
  contact: {
    padding: "60px 8%",
    color: "#cbd5e1",
  },
  floatingWhatsApp: {
    position: "fixed",
    right: "22px",
    bottom: "22px",
    background: "#22c55e",
    color: "white",
    padding: "14px 20px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
  },
  footer: {
    padding: "26px 8%",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    color: "#94a3b8",
    fontSize: "13px",
    lineHeight: "1.6",
  },
};
