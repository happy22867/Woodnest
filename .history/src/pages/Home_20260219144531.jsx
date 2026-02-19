import React from "react";

const BG = "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1600&q=90";

const Home = () => {

  const navLink = { color: "#fff", textDecoration: "none", fontSize: "17px", fontWeight: 500, opacity: 0.9 };

  const dateBox = {
    flex: 1, background: "rgba(255,255,255,0.1)", borderRadius: "10px",
    padding: "13px 14px", fontSize: "15px", color: "#fff",
    display: "flex", alignItems: "center", gap: "8px", cursor: "pointer"
  };

  const infoBox = {
    flex: 1, background: "rgba(255,255,255,0.1)",
    borderRadius: "10px", padding: "13px 14px"
  };

  return (
    <div style={{
      width: "100vw", height: "100vh", overflow: "hidden",
      position: "relative", fontFamily: "'Segoe UI', system-ui, sans-serif",
      display: "flex", alignItems: "center", justifyContent: "center"
    }}>

      {/* OUTER BLUR */}
      <div style={{
        position: "absolute", inset: 0,
        background: `url(${BG}) center/cover`,
        filter: "blur(10px)", transform: "scale(1.08)", zIndex: 0
      }} />

      {/* MAIN FRAME */}
      <div style={{
        position: "relative", zIndex: 1, width: "88vw", height: "86vh",
        borderRadius: "26px", border: "1.5px solid rgba(255,255,255,0.35)",
        overflow: "hidden", display: "flex", flexDirection: "column"
      }}>

        <div style={{
          position: "absolute", inset: 0,
          background: `url(${BG}) center/cover`, zIndex: 0
        }} />

        <div style={{
          position: "relative", zIndex: 1,
          display: "flex", flexDirection: "column",
          height: "100%", padding: "32px 42px 38px"
        }}>

          {/* NAV */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <svg width="34" height="34" viewBox="0 0 34 34">
                <rect width="34" height="34" rx="9" fill="#f5a623"/>
                <polygon points="17,6 28,26 6,26" fill="white"/>
                <polygon points="17,15 23,26 11,26" fill="#f5a623"/>
              </svg>
              <span style={{ color: "#fff", fontSize: "20px", fontWeight: 700 }}>WoodNest</span>
            </div>
            <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
              <a href="#" style={navLink}>Locations</a>
              <a href="#" style={navLink}>Rooms</a>
              <a href="#" style={navLink}>Experiences</a>
              <a href="#" style={navLink}>Contact</a>
              <button style={{
                padding: "12px 28px", background: "#fff",
                border: "none", borderRadius: "10px",
                fontWeight: 700, cursor: "pointer"
              }}>Book Now</button>
            </div>
          </div>

          {/* TITLE */}
          <div style={{ flex: 1, paddingTop: "38px" }}>
            <h1 style={{
              fontSize: "clamp(72px, 8.5vw, 108px)",
              fontWeight: 300, color: "#fff", margin: 0, lineHeight: 1.02
            }}>
              Nature's<br />
              <span style={{ color: "rgba(255,255,255,0.28)" }}>Perfect</span><br />
              Hideaways
            </h1>
          </div>

          {/* BOTTOM */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>

            {/* LEFT TEXT */}
            <div style={{ maxWidth: "290px", color: "#fff" }}>
              <p style={{ opacity: 0.8, lineHeight: 1.8 }}>
                Discover handpicked luxury cabins<br/>
                in breathtaking locations. Unplug,<br/>
                unwind, and reconnect.
              </p>
              <div>★ <b>4.7</b></div>
              <small style={{ opacity: 0.6 }}>from 1,800+ stays</small>
            </div>

            {/* ✅ GLASS BOOKING CARD */}
            <div style={{
              width: "360px", position: "relative", overflow: "hidden",
              borderRadius: "20px", padding: "26px",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.08)"
            }}>

              {/* blur */}
              <div style={{
                position: "absolute", inset: 0,
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)", zIndex: 0
              }} />

              {/* light haze */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.03))",
                zIndex: 1
              }} />

              {/* content */}
              <div style={{ position: "relative", zIndex: 2, color: "#fff" }}>
                <h3>Evergreen<br/>Pine Family Lodge</h3>

                <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                  {["Feb 11", "Mar 25"].map(d => <div key={d} style={dateBox}>{d}</div>)}
                </div>

                <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                  <div style={infoBox}>After 2:00 PM</div>
                  <div style={infoBox}>Until 12:00 PM</div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div><b>$359</b>/night</div>
                  <span>2–5 guests</span>
                </div>

                <button style={{
                  marginTop: "15px", width: "100%",
                  padding: "14px", borderRadius: "12px",
                  border: "none", fontWeight: 600
                }}>Reserve</button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
