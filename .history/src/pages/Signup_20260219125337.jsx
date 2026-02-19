import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { FaApple, FaGoogle, FaFacebookF } from "react-icons/fa";

const IMG = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    try { await API.post("/auth/signup", formData); alert("Signup successful"); navigate("/login"); }
    catch (err) { alert(err.response?.data?.message || "Signup failed"); }
  };

  const inp = { width: "110%", boxSizing: "border-box", padding: "14px 18px", background: "#f5f5f5", border: "none", borderRadius: "50px", fontSize: "14px", outline: "none" };
  const socials = [
    { label: "Apple", icon: <FaApple size={18} /> },
    { label: "Google", icon: <FaGoogle size={18} color="#4285F4" /> },
    { label: "Facebook", icon: <FaFacebookF size={18} color="#1877F2" /> },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: `url(${IMG}) center/cover`, padding: 24 }}>
      <div style={{ display: "flex", width: 860, minHeight: 540, background: "#fff", borderRadius: 26, overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,.4)" }}>

        <div style={{ flex: 1, padding: "50px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: 21, fontWeight: 700, color: "#4a7a3a", fontStyle: "italic", marginBottom: 16 }}>voyger</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.2, marginBottom: 32 }}>Start Your<br />Perfect Trip</h1>

          <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
            {socials.map(s => (
              <button key={s.label} title={s.label} style={{ width: 52, height: 52, borderRadius: "50%", background: "#f3f3f3", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {s.icon}
              </button>
            ))}
          </div>

          <div style={{ color: "#aaa", fontSize: 13, marginBottom: 16 }}>or</div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 11, maxWidth: 300 }}>
            <input name="name" placeholder="Full name" value={formData.name} onChange={handleChange} style={inp} />
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} style={inp} />

            <div style={{ position: "relative" }}>
              <input name="password" type={showPassword ? "text" : "password"} placeholder="Password" value={formData.password} onChange={handleChange} style={{ ...inp, paddingRight: 44 }} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#888" }}>👁</button>
            </div>

            <button type="submit" style={{ padding: 15, background: "#3d6b30", color: "#fff", border: "none", borderRadius: "50px", fontSize: 15, fontWeight: 600, cursor: "pointer", marginTop: 4 }}>Start</button>
          </form>

          <p style={{ fontSize: 13, color: "#888", marginTop: 16 }}>
            Already have an account? <span onClick={() => navigate("/login")} style={{ fontWeight: 700, cursor: "pointer" }}>Log in</span>
          </p>
        </div>

        <div style={{ width: 470, padding: 14 }}>
          <img src={IMG} alt="Travel" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16 }} />
        </div>

      </div>
    </div>
  );
};

export default Signup;
