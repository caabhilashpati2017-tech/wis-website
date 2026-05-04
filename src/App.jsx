export default function App() {
  const whatsapp =
    "https://wa.me/919040467041?text=Hello%20Abhilash%20Sir,%20I%20want%20to%20discuss%20my%20investment%20plan.";

  return (
    <div style={styles.page}>
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
            <a href={whatsapp} target="_blank" style={styles.primaryBtn}>
              Get Your Free Portfolio Review
            </a>
            <a href={whatsapp} target="_blank" style={styles.secondaryBtn}>
              Start Consultation on WhatsApp
            </a>
          </div>
        </div>

        <div style={styles.profileCard}>
          <div style={styles.profileCircle}>AP</div>
          <h3 style={styles.profileName}>Abhilash Pati</h3>
          <p style={styles.profileRole}>Chartered Accountant</p>
          <p style={styles.smallText}>
            Certified MF & SIF Distributor | Research Analyst
          </p>
        </div>
      </section>

      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About WIS</h2>
        <p style={styles.text}>
          Wealthverse Investment Solution was built with a simple philosophy —
          investment should be driven by purpose, not pressure.
          <br /><br />
          Led by Abhilash Pati, Chartered Accountant, WIS focuses on structured,
          research-based and goal-oriented investment planning.
        </p>
      </section>

      <section id="services" style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Services</h2>

        <div style={styles.cards}>
          <Card title="Wealth Management" text="Long-term structured wealth planning tailored to your life goals." />
          <Card title="Goal-Based Investing" text="Invest with clarity for retirement, children and future milestones." />
          <Card title="Tax Planning" text="Reduce tax burden while maintaining strong financial planning discipline." />
          <Card title="Retirement Planning" text="Build financial independence and predictable income streams." />
        </div>
      </section>

      <section style={styles.sectionDark}>
        <h2 style={styles.sectionTitle}>Why WIS</h2>

        <div style={styles.cards}>
          <Card title="CA-Led Advice" text="Professional financial discipline behind every decision." />
          <Card title="Smartwork Approach" text="We focus on strategy, not random investing." />
          <Card title="Client-Centric" text="Every plan is built around your personal goals." />
        </div>
      </section>

      <section id="history" style={styles.section}>
        <h2 style={styles.sectionTitle}>The Story Behind WIS</h2>

        <p style={styles.text}>
          WIS was created from a simple observation — most people struggle with
          investing not because they lack money, but because they lack clarity.
          <br /><br />
          Many investors either follow random advice or stay limited to
          traditional options without understanding the impact of inflation,
          taxation and long-term planning.
          <br /><br />
          Wealthverse Investment Solution was built to change that — by bringing
          structured thinking, research-backed decisions and goal-based investing
          into every client’s financial journey.
        </p>
      </section>

      <section style={styles.cta}>
        <h2>Start Your Investment Journey With Clarity</h2>
        <p style={styles.ctaText}>
          Begin with a conversation and understand how your money can be planned better.
        </p>
        <a href={whatsapp} target="_blank" style={styles.primaryBtn}>
          Explore Your Investment Plan
        </a>
      </section>

      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact</h2>
        <p><strong>Abhilash Pati</strong></p>
        <p>Sambalpur, Odisha</p>
        <p>+91-9040467041</p>
        <p>caabhilashpati2017@gmail.com</p>
      </section>

      <a
        href={whatsapp}
        target="_blank"
        style={styles.floatingWhatsapp}
      >
        WhatsApp
      </a>

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
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
  },
  header: {
    padding: "20px 8%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    flexWrap: "wrap",
    gap: 20,
  },
  logo: {
    color: "#facc15",
    fontSize: 34,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  logoSub: {
    fontSize: 13,
    color: "#94a3b8",
  },
  nav: {
    display: "flex",
    gap: 20,
    flexWrap: "wrap",
    alignItems: "center",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
  },
  navCta: {
    background: "#facc15",
    color: "black",
    padding: "9px 15px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: "bold",
  },
  hero: {
    padding: "80px 8%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 40,
    flexWrap: "wrap",
  },
  heroText: {
    maxWidth: 650,
  },
  kicker: {
    color: "#facc15",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  heroTitle: {
    fontSize: "clamp(38px, 6vw, 64px)",
    lineHeight: 1.08,
    margin: "18px 0",
  },
  heroPara: {
    color: "#cbd5e1",
    fontSize: 18,
    lineHeight: 1.7,
  },
  buttons: {
    marginTop: 25,
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
  },
  primaryBtn: {
    background: "#facc15",
    color: "black",
    padding: "13px 22px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: "bold",
    display: "inline-block",
  },
  secondaryBtn: {
    border: "1px solid rgba(255,255,255,0.35)",
    padding: "13px 22px",
    borderRadius: 999,
    textDecoration: "none",
    color: "white",
    display: "inline-block",
  },
  profileCard: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#0f172a",
    border: "1px solid rgba(250,204,21,0.35)",
    borderRadius: 24,
    padding: 32,
    width: 280,
    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
  },
  profileCircle: {
    width: 90,
    height: 90,
    borderRadius: "50%",
    background: "#facc15",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    fontSize: 28,
    fontWeight: "bold",
    color: "#020617",
  },
  profileName: {
    margin: "8px 0 5px",
  },
  profileRole: {
    color: "#facc15",
    margin: "0 0 8px",
  },
  smallText: {
    color: "#cbd5e1",
    fontSize: 14,
    lineHeight: 1.5,
  },
  section: {
    padding: "65px 8%",
  },
  sectionDark: {
    padding: "65px 8%",
    background: "#0f172a",
  },
  sectionTitle: {
    fontSize: 32,
    marginBottom: 18,
  },
  text: {
    color: "#cbd5e1",
    lineHeight: 1.7,
    maxWidth: 850,
    fontSize: 17,
  },
  cards: {
    display: "flex",
    gap: 22,
    flexWrap: "wrap",
    marginTop: 25,
  },
  card: {
    background: "#1e293b",
    padding: 24,
    borderRadius: 16,
    width: 260,
    color: "#cbd5e1",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  cta: {
    textAlign: "center",
    padding: "60px 8%",
    background: "linear-gradient(135deg, rgba(250,204,21,0.15), rgba(255,255,255,0.04))",
  },
  ctaText: {
    color: "#cbd5e1",
    marginBottom: 25,
  },
  floatingWhatsapp: {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    background: "#25D366",
    color: "white",
    padding: "13px 19px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
    zIndex: 1000,
  },
  footer: {
    textAlign: "center",
    padding: 24,
    color: "#94a3b8",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    fontSize: 13,
  },
};
