import React from "react";

// Foggy pine forest cabin with warm orange glow - exact same vibe as design
const BG = "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1600&q=90";

const Home = () => {

  const navLink = {
    color: "rgba(255,255,255,0.85)",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 400,
  };

  const dateBox = {
    flex: 1,
    background: "rgba(255,255,255,0.07)",
    borderRadius: "10px",
    padding: "10px 12px",
    fontSize: "13px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    cursor: "pointer",
  };

  const infoBox = {
    flex: 1,
    background: "rgba(255,255,255,0.07)",
    borderRadius: "10px",
    padding: "10px 12px",
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

      {/* Outer glass card — takes most of the screen, blurred border */}
      <div style={{
        width: "88vw",
        height: "82vh",
        borderRadius: "24px",
        border: "1.5px solid rgba(255,255,255,0.22)",
        background: "rgba(10,20,35,0.22)",
        backdropFilter: "blur(3px)",
        display: "flex",
        flexDirection: "column",
        padding: "28px 36px 32px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}>

        {/* NAVBAR */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <rect width="30" height="30" rx="8" fill="#f5a623"/>
              <polygon points="15,6 24,22 6,22" fill="white"/>
              <polygon points="15,13 20,22 10,22" fill="#f5a623"/>
            </svg>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: "16px", letterSpacing: "0.2px" }}>WoodNest</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "34px" }}>
            <a href="#" style={navLink}>Locations</a>
            <a href="#" style={navLink}>Rooms</a>
            <a href="#" style={navLink}>Experiences</a>
            <a href="#" style={navLink}>Contact</a>
            <button style={{
              padding: "9px 22px",
              background: "#fff",
              color: "#111",
              border: "none",
              borderRadius: "9px",
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer",
              letterSpacing: "0.2px",
            }}>Book Now</button>
          </div>
        </div>

        {/* MIDDLE — big heading fills the space */}
        <div style={{ flex: 1, display: "flex", alignItems: "flex-start", paddingTop: "36px" }}>
          <h1 style={{
            fontSize: "clamp(60px, 7.5vw, 96px)",
            fontWeight: 300,
            lineHeight: 1.02,
            color: "#fff",
            margin: 0,
            letterSpacing: "-1.5px",
            fontFamily: "'Segoe UI', system-ui, sans-serif",
          }}>
            Nature's<br />
            <span style={{ color: "rgba(255,255,255,0.28)", fontWeight: 300 }}>Perfect</span><br />
            Hideaways
          </h1>
        </div>

        {/* BOTTOM ROW */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexShrink: 0 }}>

          {/* Bottom left — description + rating */}
          <div style={{ maxWidth: "260px" }}>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.72)", lineHeight: 1.75, marginBottom: "18px" }}>
              Discover handpicked luxury cabins in breathtaking locations. Unplug, unwind, and reconnect with what matters most.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <span style={{ color: "#f5a623", fontSize: "18px" }}>★</span>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "17px" }}>4.7</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", marginTop: "4px" }}>from 1,800+ stays</p>
          </div>

          {/* Booking card — dark, no extra blur needed */}
          <div style={{
            width: "300px",
            background: "rgba(12,18,28,0.92)",
            borderRadius: "18px",
            padding: "20px 20px 18px",
            color: "#fff",
            flexShrink: 0,
          }}>
            {/* Title row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
              <div style={{ fontSize: "17px", fontWeight: 600, lineHeight: 1.35 }}>
                Evergreen<br />Pine Family Lodge
              </div>
              <button style={{
                background: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: "8px",
                width: "30px",
                height: "30px",
                cursor: "pointer",
                color: "#fff",
                fontSize: "13px",
                flexShrink: 0,
              }}>✏</button>
            </div>

            {/* Dates */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
              <div style={dateBox}>📅 Feb 11 <span style={{ opacity: 0.4, marginLeft: "auto" }}>▾</span></div>
              <div style={dateBox}>📅 Mar 25 <span style={{ opacity: 0.4, marginLeft: "auto" }}>▾</span></div>
            </div>

            {/* Check-in / out */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
              <div style={infoBox}>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginBottom: "3px" }}>Check-in</div>
                <div style={{ fontSize: "13px", color: "#fff", fontWeight: 500 }}>After 2:00 PM</div>
              </div>
              <div style={infoBox}>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginBottom: "3px" }}>Check-out</div>
                <div style={{ fontSize: "13px", color: "#fff", fontWeight: 500 }}>Until 12:00 PM</div>
              </div>
            </div>

            {/* Price */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
              <div>
                <span style={{ fontSize: "26px", fontWeight: 700 }}>$359</span>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>/night</span>
              </div>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>2–5 guests</span>
            </div>

            <button style={{
              width: "100%",
              padding: "12px",
              background: "#fff",
              color: "#111",
              border: "none",
              borderRadius: "10px",
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer",
            }}>
              Reserve
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;