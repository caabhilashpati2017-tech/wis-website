export default function App() {
  const whatsappLink =
    "https://wa.me/919040467041?text=Hello%20Abhilash%20Sir%2C%20I%20want%20investment%20advisory%20for%20my%20financial%20goals.";

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.logo}>WIS</h1>
          <p style={styles.subLogo}>Wealthverse Investment Solution</p>
        </div>
        <nav style={styles.nav}>
          <a href="#services" style={styles.navLink}>Services</a>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <p style={styles.badge}>Investment Advisory • Wealth Planning • Tax Efficiency</p>
        <h2 style={styles.heroTitle}>Build Wealth With Confidence</h2>
        <p style={styles.heroText}>
          Professional investment advisory by Abhilash Pati, Chartered Accountant,
          helping individuals and families make smarter financial decisions.
        </p>
        <div style={styles.heroButtons}>
          <a href={whatsappLink} style={styles.primaryBtn}>Book Free Consultation</a>
          <a href="#services" style={styles.secondaryBtn}>Explore Services</a>
        </div>
      </section>

      <section id="services" style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Core Services</h2>
        <div style={styles.cards}>
          <div style={styles.card}>
            <h3>Investment Advisory</h3>
            <p>Goal-based strategies for long-term wealth creation and financial stability.</p>
          </div>
          <div style={styles.card}>
            <h3>Tax Efficient Planning</h3>
            <p>Plan your investments with a tax-aware approach for better net returns.</p>
          </div>
          <div style={styles.card}>
            <h3>Wealth Management</h3>
            <p>Broad financial guidance beyond mutual funds, insurance, or one product.</p>
          </div>
        </div>
      </section>

      <section id="about" style={styles.about}>
        <h2 style={styles.sectionTitle}>Why Choose WIS?</h2>
        <p>
          WIS is led by Abhilash Pati, Chartered Accountant, based in Sambalpur,
          Odisha. Our approach is simple: understand your goals, assess your risk,
          and create a practical wealth roadmap with clarity and discipline.
        </p>
      </section>

      <section style={styles.cta}>
        <h2>Ready to plan your financial future?</h2>
        <p>Start with a simple WhatsApp consultation.</p>
        <a href={whatsappLink} style={styles.primaryBtn}>Contact on WhatsApp</a>
      </section>

      <section id="contact" style={styles.contact}>
        <h2>Contact WIS</h2>
        <p><strong>Abhilash Pati</strong> — Chartered Accountant</p>
        <p>Sambalpur, Odisha</p>
        <p>Phone: +91-9040467041</p>
        <p>Email: caabhilashpati2017@gmail.com</p>
        <div>
          <a href="https://www.youtube.com/@Wealthverseinvestmentsolution" style={styles.social}>YouTube</a>
          <a href="https://instagram.com/wealthverseinvest" style={styles.social}>Instagram</a>
        </div>
      </section>

      <a href={whatsappLink} style={styles.floatingWhatsApp}>WhatsApp</a>

      <footer style={styles.footer}>
        Disclaimer: Investments are subject to market risks. Past performance does not guarantee future returns.
      </footer>
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
    padding: "24px 8%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  logo: {
    color: "#facc15",
    fontSize: "36px",
    margin: 0,
  },
  subLogo: {
    margin: 0,
    color: "#cbd5e1",
  },
  nav: {
    display: "flex",
    gap: "24px",
  },
  navLink: {
    color: "#e2e8f0",
    textDecoration: "none",
  },
  hero: {
    padding: "90px 8%",
    maxWidth: "850px",
  },
  badge: {
    color: "#facc15",
    fontWeight: "bold",
  },
  heroTitle: {
    fontSize: "56px",
    lineHeight: "1.1",
    margin: "20px 0",
  },
  heroText: {
    fontSize: "19px",
    color: "#cbd5e1",
    maxWidth: "700px",
  },
  heroButtons: {
    marginTop: "30px",
    display: "flex",
    gap: "16px",
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
  },
  section: {
    padding: "60px 8%",
  },
  sectionTitle: {
    fontSize: "34px",
    color: "#f8fafc",
  },
  cards: {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
    marginTop: "24px",
  },
  card: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "28px",
    borderRadius: "18px",
    width: "280px",
    color: "#cbd5e1",
  },
  about: {
    padding: "60px 8%",
    maxWidth: "850px",
    color: "#cbd5e1",
    fontSize: "17px",
  },
  cta: {
    margin: "40px 8%",
    padding: "45px",
    borderRadius: "24px",
    background: "linear-gradient(135deg, rgba(250,204,21,0.18), rgba(59,130,246,0.12))",
  },
  contact: {
    padding: "60px 8%",
    color: "#cbd5e1",
  },
  social: {
    color: "#38bdf8",
    marginRight: "18px",
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
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },
  footer: {
    padding: "24px 8%",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    color: "#94a3b8",
    fontSize: "13px",
  },
};
