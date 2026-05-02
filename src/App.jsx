export default function App() {
  const whatsapp =
    "https://wa.me/919040467041?text=Hello%20Abhilash%20Sir%2C%20I%20want%20to%20discuss%20my%20investment%20plan.";

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
          <a href="#why" style={styles.navLink}>Why WIS</a>
          <a href="#contact" style={styles.navCta}>Consult Now</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <p style={styles.kicker}>Private Wealth Advisory • CA-Led • Research Driven</p>

          <h1 style={styles.heroTitle}>
            Premium Wealth Planning for Serious Investors
          </h1>

          <p style={styles.heroText}>
            WIS helps first-time investors, salaried individuals, retirees, HNIs,
            Trusts and AOPs build goal-based, tax-efficient investment plans with clarity,
            discipline and long-term vision.
          </p>

          <div style={styles.ctaRow}>
            <a href={whatsapp} style={styles.goldBtn}>Get Your Free Portfolio Review</a>
            <a href="#services" style={styles.outlineBtn}>Explore Services</a>
          </div>

          <div style={styles.trustRow}>
            <div><strong>CA</strong><span>Led Advisory</span></div>
            <div><strong>SIF</strong><span>Distributor Certified</span></div>
            <div><strong>RA</strong><span>Research Analyst</span></div>
          </div>
        </div>

        <div style={styles.heroCard}>
          <div style={styles.photoPlaceholder}>AP</div>
          <h2 style={styles.profileName}>Abhilash Pati</h2>
          <p style={styles.profileRole}>Chartered Accountant</p>
          <div style={styles.profileLine}></div>
          <p style={styles.profileText}>
            Certified Mutual Fund & SIF Distributor<br />
            Certified Research Analyst<br />
            Founder, WIS
          </p>
          <a href={whatsapp} style={styles.cardBtn}>Talk to Abhilash</a>
        </div>
      </section>

      <section style={styles.clientStrip}>
        <span>Built for</span>
        <strong>First-time Investors</strong>
        <strong>Salaried Professionals</strong>
        <strong>Retirees</strong>
        <strong>HNIs</strong>
        <strong>Trusts / AOPs</strong>
      </section>

      <section id="about" style={styles.storySection}>
        <p style={styles.sectionLabel}>About WIS</p>
        <h2 style={styles.sectionTitle}>
          Investment is our passion, not compulsion.
        </h2>
        <p style={styles.storyText}>
          Wealthverse Investment Solution was created to offer premium,
          personalized wealth planning based on each client’s goals, risk profile
          and life stage. We combine professional qualification, smart research and
          technology-driven investing to simplify serious financial decisions.
        </p>
      </section>

      <section id="services" style={styles.section}>
        <p style={styles.sectionLabel}>Services</p>
        <h2 style={styles.sectionTitle}>Private wealth services designed around your goals.</h2>

        <div style={styles.serviceGrid}>
          <Service title="Wealth Management" text="Structured wealth roadmap for long-term capital growth and stability." />
          <Service title="Goal-Based Investing" text="Children’s future, retirement, family goals and milestone-based planning." />
          <Service title="Tax Planning" text="Tax-aware investing designed to improve post-tax outcomes." />
          <Service title="Retirement Planning" text="Create a peaceful retirement plan with disciplined cash-flow strategy." />
          <Service title="Financing Guidance" text="Smart capital allocation and financing decisions for individuals and entities." />
          <Service title="Research Investing" text="New-age, technology-driven research approach for informed decisions." />
        </div>
      </section>

      <section id="why" style={styles.whySection}>
        <div>
          <p style={styles.sectionLabel}>Why Choose WIS</p>
          <h2 style={styles.sectionTitle}>Premium guidance. Personal attention. Smart execution.</h2>
        </div>

        <div style={styles.whyGrid}>
          <Why number="01" title="CA-Led Clarity" text="Professional financial thinking with disciplined planning." />
          <Why number="02" title="Client-Specific Strategy" text="No generic advice. Plans are built around your goals and situation." />
          <Why number="03" title="Smartwork Approach" text="We focus on intelligent planning, not random hard work." />
          <Why number="04" title="Research First" text="Technology-driven and research-backed investing framework." />
        </div>
      </section>

      <section style={styles.testimonialSection}>
        <p style={styles.sectionLabel}>Client Experiences</p>
        <h2 style={styles.sectionTitle}>What clients value about WIS</h2>

        <div style={styles.testimonialGrid}>
          <div style={styles.testimonial}>
            “Savings was difficult before, but after partnering with WIS it has become auto-driven.”
          </div>
          <div style={styles.testimonial}>
            “Last year I had to pay tax of ₹60,000 because of FD interest. This year it is less than ₹5,000 while receiving similar income — great tax planning.”
          </div>
        </div>
      </section>

      <section style={styles.finalCta}>
        <h2>Ready to build a smarter investment plan?</h2>
        <p>Start with a free portfolio review and understand where your money stands today.</p>
        <a href={whatsapp} style={styles.goldBtn}>Start Your Free Consultation on WhatsApp</a>
      </section>

      <section id="contact" style={styles.contact}>
        <div>
          <h2>Contact WIS</h2>
          <p><strong>Abhilash Pati</strong> — Chartered Accountant</p>
          <p>Sambalpur, Odisha</p>
          <p>+91-9040467041</p>
          <p>caabhilashpati2017@gmail.com</p>
        </div>

        <div>
          <h3>Learn finance in 30 seconds</h3>
          <p>Subscribe on YouTube and follow us on Instagram for simple finance education.</p>
          <a href="https://www.youtube.com/@Wealthverseinvestmentsolution" style={styles.social}>YouTube</a>
          <a href="https://instagram.com/wealthverseinvest" style={styles.social}>Instagram</a>
        </div>
      </section>

      <a href={whatsapp} style={styles.floating}>WhatsApp</a>

      <footer style={styles.footer}>
        Disclaimer: Investments are subject to market risks. Past performance does not guarantee future returns.
        Please consult before making investment decisions.
      </footer>
    </div>
  );
}

function Service({ title, text }) {
  return (
    <div style={styles.serviceCard}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Why({ number, title, text }) {
  return (
    <div style={styles.whyCard}>
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    color: "#f8fafc",
    background:
      "radial-gradient(circle at top left, rgba(212,175,55,0.18), transparent 32%), linear-gradient(135deg, #050505 0%, #0b1120 55%, #020617 100%)",
    fontFamily: "Georgia, 'Times New Roman', serif",
  },
  header: {
    padding: "24px 8%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(212,175,55,0.2)",
    flexWrap: "wrap",
    gap: 20,
  },
  logo: {
    color: "#d4af37",
    fontSize: 42,
    fontWeight: 700,
    letterSpacing: 2,
  },
  logoSub: {
    color: "#cbd5e1",
    fontSize: 14,
    letterSpacing: 1,
  },
  nav: {
    display: "flex",
    gap: 22,
    alignItems: "center",
    flexWrap: "wrap",
    fontFamily: "Arial, sans-serif",
  },
  navLink: {
    color: "#e5e7eb",
    textDecoration: "none",
    fontSize: 14,
  },
  navCta: {
    color: "#050505",
    background: "#d4af37",
    padding: "10px 16px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 700,
  },
  hero: {
    padding: "90px 8% 70px",
    display: "flex",
    justifyContent: "space-between",
    gap: 50,
    alignItems: "center",
    flexWrap: "wrap",
  },
  heroLeft: {
    maxWidth: 760,
  },
  kicker: {
    color: "#d4af37",
    fontFamily: "Arial, sans-serif",
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    fontSize: 13,
  },
  heroTitle: {
    fontSize: "clamp(44px, 6vw, 76px)",
    lineHeight: 1,
    margin: "20px 0",
    maxWidth: 850,
  },
  heroText: {
    fontFamily: "Arial, sans-serif",
    color: "#cbd5e1",
    fontSize: 18,
    lineHeight: 1.8,
    maxWidth: 700,
  },
  ctaRow: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
    marginTop: 32,
    fontFamily: "Arial, sans-serif",
  },
  goldBtn: {
    background: "linear-gradient(135deg, #d4af37, #f7d774)",
    color: "#050505",
    padding: "15px 24px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 800,
    display: "inline-block",
    fontFamily: "Arial, sans-serif",
  },
  outlineBtn: {
    border: "1px solid rgba(212,175,55,0.45)",
    color: "#f8fafc",
    padding: "15px 24px",
    borderRadius: 999,
    textDecoration: "none",
    display: "inline-block",
  },
  trustRow: {
    display: "flex",
    gap: 18,
    flexWrap: "wrap",
    marginTop: 36,
    fontFamily: "Arial, sans-serif",
  },
  trustRow: {
    display: "flex",
    gap: 18,
    flexWrap: "wrap",
    marginTop: 36,
    fontFamily: "Arial, sans-serif",
  },
  heroCard: {
    width: 320,
    padding: 30,
    borderRadius: 28,
    textAlign: "center",
    background: "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
    border: "1px solid rgba(212,175,55,0.35)",
    boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
    fontFamily: "Arial, sans-serif",
  },
  photoPlaceholder: {
    width: 110,
    height: 110,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #d4af37, #f7d774)",
    color: "#050505",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    fontSize: 38,
    fontWeight: 800,
  },
  profileName: {
    margin: "0 0 6px",
    fontFamily: "Georgia, serif",
  },
  profileRole: {
    color: "#d4af37",
    margin: 0,
  },
  profileLine: {
    height: 1,
    background: "rgba(212,175,55,0.35)",
    margin: "22px 0",
  },
  profileText: {
    color: "#cbd5e1",
    lineHeight: 1.7,
  },
  cardBtn: {
    marginTop: 15,
    display: "inline-block",
    color: "#d4af37",
    textDecoration: "none",
    fontWeight: 700,
  },
  clientStrip: {
    margin: "0 8%",
    padding: "20px",
    borderTop: "1px solid rgba(212,175,55,0.25)",
    borderBottom: "1px solid rgba(212,175,55,0.25)",
    display: "flex",
    gap: 22,
    flexWrap: "wrap",
    fontFamily: "Arial, sans-serif",
    color: "#cbd5e1",
  },
  storySection: {
    padding: "80px 8%",
    maxWidth: 950,
  },
  section: {
    padding: "80px 8%",
  },
  sectionLabel: {
    color: "#d4af37",
    fontFamily: "Arial, sans-serif",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: 13,
  },
  sectionTitle: {
    fontSize: "clamp(32px, 4vw, 52px)",
    lineHeight: 1.1,
    margin: "12px 0 28px",
  },
  storyText: {
    color: "#cbd5e1",
    fontFamily: "Arial, sans-serif",
    fontSize: 18,
    lineHeight: 1.8,
  },
  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 22,
  },
  serviceCard: {
    padding: 28,
    borderRadius: 24,
    background: "rgba(255,255,255,0.055)",
    border: "1px solid rgba(212,175,55,0.18)",
    fontFamily: "Arial, sans-serif",
  },
  whySection: {
    padding: "80px 8%",
    background: "rgba(255,255,255,0.035)",
  },
  whyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 22,
  },
  whyCard: {
    padding: 28,
    borderRadius: 24,
    background: "#050505",
    border: "1px solid rgba(212,175,55,0.24)",
    fontFamily: "Arial, sans-serif",
  },
  testimonialSection: {
    padding: "80px 8%",
  },
  testimonialGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 24,
  },
  testimonial: {
    padding: 30,
    borderRadius: 24,
    background: "rgba(212,175,55,0.08)",
    borderLeft: "4px solid #d4af37",
    color: "#e5e7eb",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.7,
  },
  finalCta: {
    margin: "40px 8%",
    padding: "55px",
    borderRadius: 32,
    background: "linear-gradient(135deg, rgba(212,175,55,0.22), rgba(255,255,255,0.06))",
    border: "1px solid rgba(212,175,55,0.35)",
  },
  contact: {
    padding: "80px 8%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 40,
    color: "#cbd5e1",
    fontFamily: "Arial, sans-serif",
  },
  social: {
    color: "#d4af37",
    marginRight: 18,
    textDecoration: "none",
    fontWeight: 700,
  },
  floating: {
    position: "fixed",
    right: 22,
    bottom: 22,
    background: "#25D366",
    color: "white",
    padding: "14px 20px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 800,
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 14px 40px rgba(0,0,0,0.45)",
  },
  footer: {
    padding: "28px 8%",
    color: "#94a3b8",
    borderTop: "1px solid rgba(212,175,55,0.18)",
    fontFamily: "Arial, sans-serif",
    fontSize: 13,
    lineHeight: 1.7,
  },
};
