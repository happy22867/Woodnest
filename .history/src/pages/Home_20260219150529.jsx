import React from "react";

const BG = "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1600&q=90";

const Home = () => {

  const navLink = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: 500,
    opacity: 0.9,
  };

  const dateBox = {
    flex: 1,
    background: "rgba(255,255,255,0.1)",
    borderRadius: "10px",
    padding: "13px 14px",
    fontSize: "15px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
  };

  const infoBox = {
    flex: 1,
    background: "rgba(255,255,255,0.1)",
    borderRadius: "10px",
    padding: "13px 14px",
  };

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>

      {/* Layer 1 — OUTER area: blurred BG (covers full screen) */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(8px)",
        transform: "scale(1.08)",
        zIndex: 0,
      }} />

      {/* Layer 2 — INNER card: sharp BG image clipped to card shape */}
      <div style={{
        position: "relative",
        zIndex: 1,
        width: "88vw",
        height: "86vh",
        borderRadius: "26px",
        border: "1.5px solid rgba(200,215,235,0.4)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}>

        {/* Sharp image inside the card */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }} />

        {/* All content sits above the sharp image */}
        <div style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "32px 42px 38px",
          boxSizing: "border-box",
        }}>

          {/* NAVBAR */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <rect width="34" height="34" rx="9" fill="#f5a623"/>
                <polygon points="17,6 28,26 6,26" fill="white"/>
                <polygon points="17,15 23,26 11,26" fill="#f5a623"/>
              </svg>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "20px" }}>WoodNest</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
              <a href="#" style={navLink}>Locations</a>
              <a href="#" style={navLink}>Rooms</a>
              <a href="#" style={navLink}>Experiences</a>
              <a href="#" style={navLink}>Contact</a>
              <button style={{
                padding: "12px 28px", background: "#fff", color: "#111",
                border: "none", borderRadius: "10px", fontWeight: 700,
                fontSize: "17px", cursor: "pointer",
              }}>Book Now</button>
            </div>
          </div>

          {/* BIG HEADING */}
          <div style={{ flex: 1, display: "flex", alignItems: "flex-start", paddingTop: "38px" }}>
            <h1 style={{
              fontSize: "clamp(72px, 8.5vw, 108px)",
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

            {/* Left */}
            <div style={{ maxWidth: "290px" }}>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.78)", lineHeight: 1.8, marginBottom: "20px" }}>
                Discover handpicked luxury cabins<br />in breathtaking locations. Unplug,<br />unwind, and reconnect with what<br />matters most.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#f5a623", fontSize: "22px" }}>★</span>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: "20px" }}>4.7</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "15px", marginTop: "5px" }}>from 1,800+ stays</p>
            </div>

            {/* Booking card */}
            <div style={{
              width: "360px",
              
              
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              borderRadius: "20px",
              padding: "26px 26px 22px",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
              flexShrink: 0,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "22px" }}>
                <div style={{ fontSize: "22px", fontWeight: 600, lineHeight: 1.35 }}>
                  Evergreen<br />Pine Family Lodge
                </div>
                <button style={{
                  background: "rgba(255,255,255,0.12)", border: "none", borderRadius: "9px",
                  width: "36px", height: "36px", cursor: "pointer", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
              </div>

              <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                {["Feb 11", "Mar 25"].map((d) => (
                  <div key={d} style={dateBox}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {d}
                    <span style={{ opacity: 0.4, marginLeft: "auto" }}>▾</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                {[{ label: "Check-in", val: "After 2:00 PM" }, { label: "Check-out", val: "Until 12:00 PM" }].map((c) => (
                  <div key={c.label} style={infoBox}>
                    <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.385)", marginBottom: "5px" }}>{c.label}</div>
                    <div style={{ fontSize: "15px", fontWeight: 500 }}>{c.val}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                <div>
                  <span style={{ fontSize: "30px", fontWeight: 700 }}>$359</span>
                  <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)" }}>/night</span>
                </div>
                <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)" }}>2–5 guests</span>
              </div>

              <button style={{
                width: "100%", padding: "15px", background: "#fff", color: "#111",
                border: "none", borderRadius: "12px", fontWeight: 600, fontSize: "16px", cursor: "pointer",
              }}>Reserve</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;