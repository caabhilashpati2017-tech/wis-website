export default function App() {
  const whatsapp =
    "https://wa.me/919040467041?text=Hello%20Abhilash%20Sir,%20I%20want%20to%20discuss%20my%20investment%20plan.";

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <header style={styles.header}>
        <div>
          <div style={styles.logo}>WIS</div>
          <div style={styles.logoSub}>Wealthverse Investment Solution</div>
        </div>

        <nav style={styles.nav}>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#services" style={styles.navLink}>Services</a>
          <a href="#history" style={styles.navLink}>History</a>
          <a href="#contact" style={styles.navCta}>Consult Now</a>
        </nav>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <p style={styles.kicker}>CA-Led Wealth Advisory • Research Driven</p>

          <h1 style={styles.heroTitle}>
            Build Wealth With Clarity, Not Confusion
          </h1>

          <p style={styles.heroPara}>
            WIS helps serious investors structure their investments with clarity,
            discipline and goal-based planning — so that money works for you, not
            against you.
          </p>

          <div style={styles.buttons}>
            <a href={whatsapp} style={styles.primaryBtn}>
              Get Your Free Portfolio Review
            </a>
            <a href={whatsapp} style={styles.secondaryBtn}>
              Start Consultation on WhatsApp
            </a>
          </div>
        </div>

        <div style={styles.profileCard}>
          <div style={styles.profileCircle}>AP</div>
          <h3>Abhilash Pati</h3>
          <p>Chartered Accountant</p>
          <p style={styles.smallText}>
            Certified MF & SIF Distributor | Research Analyst
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About WIS</h2>
        <p style={styles.text}>
          Wealthverse Investment Solution was built with a simple philosophy —
          investment should be driven by purpose, not pressure.
          <br /><br />
          Led by Abhilash Pati (Chartered Accountant), WIS focuses on
          structured, research-based and goal-oriented investment planning.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Services</h2>

        <div style={styles.cards}>
          <Card title="Wealth Management" text="Long-term structured wealth planning tailored to your life goals." />
          <Card title="Goal-Based Investing" text="Invest with clarity for retirement, children and future milestones." />
          <Card title="Tax Planning" text="Reduce tax burden while maintaining strong returns." />
          <Card title="Retirement Planning" text="Build financial independence and predictable income streams." />
        </div>
      </section>

      {/* WHY WIS */}
      <section style={styles.sectionDark}>
        <h2 style={styles.sectionTitle}>Why WIS</h2>

        <div style={styles.cards}>
          <Card title="CA-Led Advice" text="Professional financial discipline behind every decision." />
          <Card title="Smartwork Approach" text="We focus on strategy, not random investing." />
          <Card title="Client-Centric" text="Every plan is built around your personal goals." />
        </div>
      </section>

      {/* HISTORY (NEW) */}
      <section id="history" style={styles.section}>
        <h2 style={styles.sectionTitle}>The Story Behind WIS</h2>

        <p style={styles.text}>
          WIS was created from a simple observation — most people struggle with
          investing not because they lack money, but because they lack clarity.
          <br /><br />
          Many investors either follow random advice or stick to traditional
          options without understanding the impact of inflation, taxation and
          long-term planning.
          <br /><br />
          Wealthverse Investment Solution was built to change that — by bringing
          structured thinking, research-backed decisions and goal-based investing
          into every client’s financial journey.
        </p>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Start Your Investment Journey With Clarity</h2>
        <a href={whatsapp} style={styles.primaryBtn}>
          Explore Your Investment Plan
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.section}>
        <h2>Contact</h2>
        <p><strong>Abhilash Pati</strong></p>
        <p>Sambalpur, Odisha</p>
        <p>+91-9040467041</p>
        <p>caabhilashpati2017@gmail.com</p>
      </section>

      <footer style={styles.footer}>
        Investments are subject to market risks. Please consult before investing.
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
    background: "#020617",
    color: "white",
    fontFamily: "Arial",
  },
  header: {
    padding: "20px 8%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  logo: { color: "#facc15", fontSize: 32 },
  logoSub: { fontSize: 12, color: "#94a3b8" },
  nav: { display: "flex", gap: 20 },
  navLink: { color: "white", textDecoration: "none" },
  navCta: {
    background: "#facc15",
    color: "black",
    padding: "8px 14px",
    borderRadius: 6,
    textDecoration: "none",
  },
  hero: {
    padding: "80px 8%",
    display: "flex",
    justifyContent: "space-between",
  },
  heroText: { maxWidth: 600 },
  kicker: { color: "#facc15" },
  heroTitle: { fontSize: 48 },
  heroPara: { color: "#cbd5e1" },
  buttons: { marginTop: 20 },
  primaryBtn: {
    background: "#facc15",
    color: "black",
    padding: "12px 20px",
    marginRight: 10,
    textDecoration: "none",
  },
  secondaryBtn: {
    border: "1px solid white",
    padding: "12px 20px",
    textDecoration: "none",
    color: "white",
  },
  profileCard: { textAlign: "center" },
  profileCircle: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    background: "#facc15",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  section: { padding: "60px 8%" },
  sectionDark: { padding: "60px 8%", background: "#0f172a" },
  sectionTitle: { fontSize: 28 },
  text: { color: "#cbd5e1", lineHeight: 1.6 },
  cards: { display: "flex", gap: 20 },
  card: {
    background: "#1e293b",
    padding: 20,
    borderRadius: 10,
  },
  cta: { textAlign: "center", padding: 50 },
  footer: { textAlign: "center", padding: 20 },
};
