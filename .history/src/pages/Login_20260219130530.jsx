import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const BG = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url(${BG})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      fontFamily: "'Segoe UI', sans-serif",
    }}>

      {/* Outer big rounded blurred container */}
      <div style={{
        width: "1020px",
        borderRadius: "22px",
        overflow: "hidden",
        backdropFilter: "blur(3px)",
        background: "rgba(10,20,40,0.15)",
        padding: "70px 55px",
      }}>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "40px" }}>

          {/* LEFT - Text */}
          <div style={{ flex: 1, color: "#fff" }}>

            {/* TRAVEL logo with plane */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "20px" }}>
              <svg width="28" height="16" viewBox="0 0 40 20" fill="none">
                <path d="M2 10 Q10 2 20 6 L36 4 L32 10 L36 16 L20 14 Q10 18 2 10Z" fill="white" opacity="0.9"/>
              </svg>
              <span style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "3px" }}>TRAVEL</span>
            </div>

            <h1 style={{
              fontSize: "62px",
              fontWeight: 900,
              lineHeight: 1.05,
              margin: "0 0 18px 0",
              textTransform: "uppercase",
              letterSpacing: "0px",
            }}>
              EXPLORE<br />HORIZONS
            </h1>

            <p style={{ fontSize: "15px", fontWeight: 600, marginBottom: "10px", lineHeight: 1.5 }}>
              Where Your Dream Destinations<br />Become Reality.
            </p>

            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, maxWidth: "270px" }}>
              Embark on a journey where every corner of the world is within your reach.
            </p>
          </div>

          {/* RIGHT - Frosted glass form card */}
          <div style={{
            width: "340px",
            flexShrink: 0,
            background: "rgba(160,175,200,0.32)",
            backdropFilter: "blur(20px)",
            borderRadius: "16px",
            padding: "32px 28px",
          }}>

            <label style={{ display: "block", fontSize: "13px", color: "#fff", marginBottom: "7px" }}>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: "100%", padding: "12px 15px", borderRadius: "8px", border: "none", fontSize: "14px", marginBottom: "16px", outline: "none", boxSizing: "border-box" }}
            />

            <label style={{ display: "block", fontSize: "13px", color: "#fff", marginBottom: "7px" }}>Password</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••••••"
              value={formData.password}
              onChange={handleChange}
              style={{ width: "100%", padding: "12px 15px", borderRadius: "8px", border: "none", fontSize: "14px", marginBottom: "8px", outline: "none", boxSizing: "border-box" }}
            />

            <div style={{ textAlign: "right", marginBottom: "18px" }}>
              <a href="/forgot-password" style={{ fontSize: "13px", color: "#fff", textDecoration: "underline" }}>
                Forgot password?
              </a>
            </div>

            <button onClick={handleSubmit} style={{
              width: "100%", padding: "13px", background: "#2979ff", color: "#fff",
              border: "none", borderRadius: "8px", fontSize: "14px", fontWeight: 700,
              letterSpacing: "1.5px", cursor: "pointer", marginBottom: "18px",
            }}>
              SIGN IN
            </button>

            {/* OR divider */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.45)" }} />
              <span style={{ fontSize: "13px", color: "#fff" }}>or</span>
              <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.45)" }} />
            </div>

            {/* Google button */}
            <button style={{
              width: "100%", padding: "11px", background: "transparent", border: "none",
              borderRadius: "8px", fontSize: "14px", color: "#fff", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "18px",
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </button>

            <p style={{ textAlign: "center", fontSize: "13px", color: "#fff", margin: 0 }}>
              Are you new?{" "}
              <a href="/signup" style={{ color: "#fff", fontWeight: 700, textDecoration: "underline" }}>
                Create an Account
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;