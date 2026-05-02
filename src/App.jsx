export default function App() {
  return (
    <div style={{
      fontFamily: "Arial",
      background: "linear-gradient(135deg, #020617, #0f172a)",
      color: "white",
      minHeight: "100vh",
      padding: "40px"
    }}>

      {/* Header */}
      <h1 style={{ color: "#facc15", fontSize: "36px" }}>
        WIS - Wealthverse Investment Solution
      </h1>
      <p style={{ color: "#94a3b8" }}>
        By Abhilash Pati (Chartered Accountant)
      </p>

      {/* Hero */}
      <div style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: "32px" }}>
          Build Wealth With Confidence
        </h2>
        <p style={{ color: "#cbd5f5", maxWidth: "600px" }}>
          Strategic investment advisory designed for professionals and families 
          who want long-term growth, tax efficiency, and financial clarity.
        </p>

        <a href="https://wa.me/919040467041"
          style={{
            display: "inline-block",
            marginTop: "20px",
            background: "#facc15",
            color: "black",
            padding: "12px 25px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold"
          }}>
          Start Consultation
        </a>
      </div>

      {/* Services */}
      <div style={{ marginTop: "60px" }}>
        <h2>Our Services</h2>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

          <div style={cardStyle}>
            <h3>Investment Advisory</h3>
            <p>Goal-based strategies to grow your wealth consistently.</p>
          </div>

          <div style={cardStyle}>
            <h3>Tax Planning</h3>
            <p>Optimize your taxes while building long-term assets.</p>
          </div>

          <div style={cardStyle}>
            <h3>Wealth Management</h3>
            <p>Complete financial planning beyond just mutual funds.</p>
          </div>

        </div>
      </div>

      {/* Social */}
      <div style={{ marginTop: "50px" }}>
        <h3>Connect With Us</h3>
        <a href="https://www.youtube.com/@Wealthverseinvestmentsolution" style={linkStyle}>YouTube</a>
        <a href="https://instagram.com/wealthverseinvest" style={linkStyle}>Instagram</a>
      </div>

      {/* Footer */}
      <p style={{
        marginTop: "60px",
        fontSize: "12px",
        color: "#64748b"
      }}>
        Disclaimer: Investments are subject to market risks. Please read all documents carefully.
      </p>

    </div>
  );
}

const cardStyle = {
  background: "#1e293b",
  padding: "20px",
  borderRadius: "12px",
  width: "250px"
};

const linkStyle = {
  marginRight: "15px",
  color: "#38bdf8",
  textDecoration: "none"
};
