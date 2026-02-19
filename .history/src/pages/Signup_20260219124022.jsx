import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const IMG = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/signup", formData);
      alert("Signup successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  const inp = {
    width: "100%",
    padding: "14px 18px",
    background: "#f5f5f5",
    border: "none",
    borderRadius: "50px",
    fontSize: "14px",
    fontFamily: "DM Sans, sans-serif",
    outline: "none",
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url(${IMG})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      fontFamily: "DM Sans, sans-serif",
      padding: "24px",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,600;0,800;1,700&display=swap" rel="stylesheet" />

      <div style={{
        display: "flex",
        width: "860px",
        minHeight: "540px",
        background: "#fff",
        borderRadius: "26px",
        overflow: "hidden",
        boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
      }}>

        {/* LEFT PANEL */}
        <div style={{ flex: 1, padding: "50px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>

          <div style={{ fontSize: "21px", fontWeight: 700, color: "#4a7a3a", fontStyle: "italic", marginBottom: "16px" }}>voyger</div>

          <h1 style={{ fontSize: "32px", fontWeight: 800, color: "#1a1a1a", lineHeight: 1.2, letterSpacing: "-0.5px", marginBottom: "32px" }}>
            Star Your<br />Perfect Trip
          </h1>

          <div style={{ display: "flex", gap: "12px", marginBottom: "18px" }}>
            {[
              { label: "Apple", icon: <svg width="17" height="20" viewBox="0 0 814 1000" fill="#111"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-155.8-107.3c-48.9-67.5-89.2-170.4-89.2-268.4 0-164.7 107.6-251.7 213-251.7 56.6 0 103.7 37.3 138.6 37.3 33.2 0 85.5-39.5 148.3-39.5 24.4 0 108.2 2.6 168.9 80.3zm-86.1-199.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg> },
              { label: "Google", icon: <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg> },
              { label: "Facebook", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
            ].map((s) => (
              <button key={s.label} title={s.label} style={{ width: 52, height: 52, borderRadius: "50%", background: "#f3f3f3", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {s.icon}
              </button>
            ))}
          </div>

          <div style={{ color: "#aaa", fontSize: "13px", marginBottom: "16px" }}>or</div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "11px", maxWidth: "300px" }}>
            <input name="name" placeholder="Full name" value={formData.name} onChange={handleChange} style={inp} />
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} style={inp} />

            <div style={{ position: "relative" }}>
              <input name="password" type={showPassword ? "text" : "password"} placeholder="Password"
                value={formData.password} onChange={handleChange}
                style={{ ...inp, paddingRight: "44px" }} />
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#888", display: "flex" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
            </div>

            <button type="submit" style={{ padding: "15px", background: "#3d6b30", color: "#fff", border: "none", borderRadius: "50px", fontSize: "15px", fontWeight: 600, fontFamily: "inherit", cursor: "pointer", marginTop: "4px" }}>
              Start
            </button>
          </form>

          <p style={{ fontSize: "13px", color: "#888", marginTop: "16px" }}>
            Already have an account? <a href="/login" style={{ color: "#1a1a1a", fontWeight: 700, textDecoration: "none" }}>Log in</a>
          </p>
        </div>

        {/* RIGHT PANEL */}
        <div style={{ width: "410px", flexShrink: 0, padding: "14px", background: "#fff" }}>
          <img src={IMG} alt="Mountain trail"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px", display: "block" }} />
        </div>

      </div>
    </div>
  );
};

export default Signup;