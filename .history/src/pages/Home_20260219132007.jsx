import React, { useState } from "react";

// Foggy forest cabin with warm yellow light - matches design vibe
const BG = "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=90";

const Home = () => {
  const [checkIn, setCheckIn] = useState("Feb 11");
  const [checkOut, setCheckOut] = useState("Mar 25");

  const navLink = { color: "#fff", textDecoration: "none", fontSize: "14px", opacity: 0.85 };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundImage: `url(${BG})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      fontFamily: "'Segoe UI', Arial, sans-serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
    }}>

      {/* Outer glass container */}
      <div style={{
        width: "960px",
        minHeight: "620px",
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.2)",
        background: "rgba(20,35,50,0.25)",
        backdropFilter: "blur(4px)",
        padding: "28px 36px 36px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}>

        {/* NAVBAR */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Logo icon */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="7" fill="#f5a623"/>
              <path d="M6 20 L14 8 L22 20 Z" fill="white"/>
              <path d="M10 20 L14 13 L18 20 Z" fill="#f5a623"/>
            </svg>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: "16px" }}>WoodNest</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <a href="#" style={navLink}>Locations</a>
            <a href="#" style={navLink}>Rooms</a>
            <a href="#" style={navLink}>Experiences</a>
            <a href="#" style={navLink}>Contact</a>
            <button style={{
              padding: "9px 22px",
              background: "#fff",
              color: "#111",
              border: "none",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer",
            }}>Book Now</button>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "40px" }}>

          {/* Big Heading */}
          <h1 style={{
            fontSize: "88px",
            fontWeight: 300,
            lineHeight: 1.0,
            margin: "0 0 0 0",
            color: "#fff",
            letterSpacing: "-2px",
            maxWidth: "600px",
          }}>
            Nature's<br />
            <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}>Perfect</span><br />
            Hideaways
          </h1>
        </div>

        {/* BOTTOM ROW - description + rating + booking card */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: "32px" }}>

          {/* Bottom left */}
          <div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", maxWidth: "230px", lineHeight: 1.7, marginBottom: "20px" }}>
              Discover handpicked luxury cabins in breathtaking locations. Unplug, unwind, and reconnect with what matters most.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#f5a623", fontSize: "20px" }}>★</span>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "18px" }}>4.7</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", marginTop: "4px" }}>from 1,800+ stays</p>
          </div>

          {/* Booking card */}
          <div style={{
            width: "310px",
            background: "rgba(15,20,30,0.88)",
            borderRadius: "18px",
            padding: "22px 22px 18px",
            color: "#fff",
            flexShrink: 0,
          }}>
            {/* Card header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "18px" }}>
              <div>
                <div style={{ fontSize: "18px", fontWeight: 600, lineHeight: 1.3 }}>Evergreen<br />Pine Family Lodge</div>
              </div>
              <button style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "8px", width: "32px", height: "32px", cursor: "pointer", color: "#fff", fontSize: "14px" }}>✏</button>
            </div>

            {/* Date row */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
              {[{ label: "Feb 11" }, { label: "Mar 25" }].map((d, i) => (
                <div key={i} style={{
                  flex: 1, background: "rgba(255,255,255,0.08)", borderRadius: "8px",
                  padding: "10px 12px", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px",
                }}>
                  <span style={{ opacity: 0.6 }}>📅</span> {d.label} <span style={{ opacity: 0.5, marginLeft: "auto" }}>▾</span>
                </div>
              ))}
            </div>

            {/* Check-in / Check-out */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "18px" }}>
              {[{ label: "Check-in", val: "After 2:00 PM" }, { label: "Check-out", val: "Until 12:00 PM" }].map((c, i) => (
                <div key={i} style={{ flex: 1, background: "rgba(255,255,255,0.08)", borderRadius: "8px", padding: "10px 12px" }}>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginBottom: "4px" }}>{c.label}</div>
                  <div style={{ fontSize: "13px", fontWeight: 500 }}>{c.val}</div>
                </div>
              ))}
            </div>

            {/* Price + guests */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
              <div>
                <span style={{ fontSize: "26px", fontWeight: 700 }}>$359</span>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>/night</span>
              </div>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>2–5 guests</span>
            </div>

            <button style={{
              width: "100%", padding: "13px", background: "#fff", color: "#111",
              border: "none", borderRadius: "10px", fontWeight: 600, fontSize: "14px", cursor: "pointer",
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