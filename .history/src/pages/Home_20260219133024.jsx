import React from "react";

const BG = "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1600&q=90";

const Home = () => {

  const navLink = {
    color: "rgba(255,255,255,0.88)",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: 400,
  };

  const dateBox = {
    flex: 1,
    background: "rgba(255,255,255,0.08)",
    borderRadius: "10px",
    padding: "12px 14px",
    fontSize: "14px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    cursor: "pointer",
  };

  const infoBox = {
    flex: 1,
    background: "rgba(255,255,255,0.08)",
    borderRadius: "10px",
    padding: "12px 14px",
  };

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      backgroundImage: `url(${BG})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
    }}>

      {/* Outer container — NO background, NO blur on content, just the rounded border */}
      <div style={{
        width: "88vw",
        height: "84vh",
        borderRadius: "26px",
        border: "1.5px solid rgba(200,210,230,0.45)",
        display: "flex",
        flexDirection: "column",
        padding: "30px 40px 36px",
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
        /* Blur only the background BEHIND this div, not the content inside */
        backdropFilter: "blur(0px)",
        background: "transparent",
      }}>

        {/* This pseudo-blur layer sits behind everything using a box-shadow trick */}
        {/* We achieve outer blur by using the page BG + the border only — inner is clear */}

        {/* NAVBAR */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0, marginBottom: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#f5a623"/>
              <polygon points="16,6 26,24 6,24" fill="white"/>
              <polygon points="16,14 22,24 10,24" fill="#f5a623"/>
            </svg>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: "18px" }}>WoodNest</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
            <a href="#" style={navLink}>Locations</a>
            <a href="#" style={navLink}>Rooms</a>
            <a href="#" style={navLink}>Experiences</a>
            <a href="#" style={navLink}>Contact</a>
            <button style={{
              padding: "11px 26px",
              background: "#fff",
              color: "#111",
              border: "none",
              borderRadius: "10px",
              fontWeight: 600,
              fontSize: "16px",
              cursor: "pointer",
            }}>Book Now</button>
          </div>
        </div>

        {/* HEADING fills middle */}
        <div style={{ flex: 1, display: "flex", alignItems: "flex-start", paddingTop: "32px" }}>
          <h1 style={{
            fontSize: "clamp(70px, 8vw, 104px)",
            fontWeight: 300,
            lineHeight: 1.02,
            color: "#fff",
            margin: 0,
            letterSpacing: "-2px",
          }}>
            Nature's<br />
            <span style={{ color: "rgba(255,255,255,0.28)" }}>Perfect</span><br />
            Hideaways
          </h1>
        </div>

        {/* BOTTOM ROW */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexShrink: 0 }}>

          {/* Left — desc + rating */}
          <div style={{ maxWidth: "280px" }}>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: "20px" }}>
              Discover handpicked luxury cabins<br />in breathtaking locations. Unplug,<br />unwind, and reconnect with what<br />matters most.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#f5a623", fontSize: "20px" }}>★</span>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "18px" }}>4.7</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", marginTop: "5px" }}>from 1,800+ stays</p>
          </div>

          {/* Booking card — solid dark, bigger */}
          <div style={{
            width: "340px",
            background: "rgb(14, 20, 32)",
            borderRadius: "20px",
            padding: "24px 24px 20px",
            color: "#fff",
            flexShrink: 0,
          }}>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "18px" }}>
              <div style={{ fontSize: "20px", fontWeight: 600, lineHeight: 1.35 }}>
                Evergreen<br />Pine Family Lodge
              </div>
              <button style={{
                background: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: "9px",
                width: "34px",
                height: "34px",
                cursor: "pointer",
                color: "#fff",
                fontSize: "14px",
                flexShrink: 0,
              }}>✏</button>
            </div>

            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <div style={dateBox}>📅 Feb 11 <span style={{ opacity: 0.4, marginLeft: "auto" }}>▾</span></div>
              <div style={dateBox}>📅 Mar 25 <span style={{ opacity: 0.4, marginLeft: "auto" }}>▾</span></div>
            </div>

            <div style={{ display: "flex", gap: "10px", marginBottom: "18px" }}>
              <div style={infoBox}>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", marginBottom: "4px" }}>Check-in</div>
                <div style={{ fontSize: "14px", fontWeight: 500 }}>After 2:00 PM</div>
              </div>
              <div style={infoBox}>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", marginBottom: "4px" }}>Check-out</div>
                <div style={{ fontSize: "14px", fontWeight: 500 }}>Until 12:00 PM</div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div>
                <span style={{ fontSize: "28px", fontWeight: 700 }}>$359</span>
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)" }}>/night</span>
              </div>
              <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)" }}>2–5 guests</span>
            </div>

            <button style={{
              width: "100%",
              padding: "14px",
              background: "#fff",
              color: "#111",
              border: "none",
              borderRadius: "11px",
              fontWeight: 600,
              fontSize: "15px",
              cursor: "pointer",
            }}>Reserve</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;