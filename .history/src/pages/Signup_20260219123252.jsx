import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .signup-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #2d4a2d;
          background-image:
            radial-gradient(ellipse at 30% 50%, rgba(60, 90, 40, 0.8) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 20%, rgba(20, 40, 20, 0.9) 0%, transparent 50%);
          font-family: 'DM Sans', sans-serif;
          padding: 24px;
        }

        .signup-card {
          display: flex;
          width: 900px;
          min-height: 560px;
          background: #ffffff;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.35);
        }

        /* LEFT PANEL */
        .signup-left {
          flex: 1;
          padding: 52px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #ffffff;
        }

        .brand-name {
          font-size: 22px;
          font-weight: 700;
          color: #4a7a3a;
          letter-spacing: -0.3px;
          margin-bottom: 18px;
          font-style: italic;
        }

        .signup-title {
          font-size: 34px;
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 36px;
        }

        /* SOCIAL BUTTONS */
        .social-row {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }

        .social-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #f3f3f3;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s;
          font-size: 18px;
        }

        .social-btn:hover {
          background: #e8e8e8;
        }

        .divider-text {
          text-align: center;
          color: #aaa;
          font-size: 13px;
          margin-bottom: 18px;
          width: 170px;
        }

        /* FORM FIELDS */
        .signup-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          max-width: 310px;
        }

        .input-wrapper {
          position: relative;
        }

        .signup-input {
          width: 100%;
          padding: 15px 18px;
          background: #f5f5f5;
          border: none;
          border-radius: 50px;
          font-size: 14px;
          color: #333;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: background 0.15s;
        }

        .signup-input::placeholder {
          color: #aaa;
        }

        .signup-input:focus {
          background: #eeeeee;
        }

        .eye-icon {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          color: #888;
          background: none;
          border: none;
          padding: 0;
          display: flex;
          align-items: center;
        }

        .start-btn {
          width: 100%;
          padding: 16px;
          background: #3d6b30;
          color: #fff;
          border: none;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          margin-top: 4px;
          transition: background 0.15s;
          letter-spacing: 0.2px;
        }

        .start-btn:hover {
          background: #2f5425;
        }

        .login-text {
          font-size: 13px;
          color: #888;
          margin-top: 18px;
          text-align: center;
          max-width: 310px;
        }

        .login-text a {
          color: #1a1a1a;
          font-weight: 700;
          text-decoration: none;
        }

        .login-text a:hover {
          text-decoration: underline;
        }

        /* RIGHT PANEL – IMAGE */
        .signup-right {
          width: 420px;
          flex-shrink: 0;
          padding: 16px;
          background: #fff;
        }

        .signup-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 18px;
          display: block;
        }

        .signup-image-placeholder {
          width: 100%;
          height: 100%;
          border-radius: 18px;
          background: linear-gradient(
            160deg,
            #3a5c2a 0%,
            #4a7a35 30%,
            #5a8a40 50%,
            #3d6430 70%,
            #2a4520 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          min-height: 460px;
        }

        /* Decorative mountain path overlay */
        .signup-image-placeholder::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 60% 80%, rgba(200,190,150,0.25) 0%, transparent 60%),
                      linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 50%, rgba(0,0,0,0.2) 100%);
        }

        /* Fog effect top */
        .signup-image-placeholder::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(to bottom, rgba(180,200,180,0.45) 0%, transparent 100%);
          z-index: 1;
        }
      `}</style>

      <div className="signup-page">
        <div className="signup-card">
          {/* LEFT */}
          <div className="signup-left">
            <div className="brand-name">voyger</div>
            <h1 className="signup-title">Star Your<br />Perfect Trip</h1>

            {/* Social login */}
            <div className="social-row">
              {/* Apple */}
              <button className="social-btn" aria-label="Sign up with Apple">
                <svg width="18" height="20" viewBox="0 0 814 1000" fill="currentColor">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-155.8-107.3c-48.9-67.5-89.2-170.4-89.2-268.4 0-164.7 107.6-251.7 213-251.7 56.6 0 103.7 37.3 138.6 37.3 33.2 0 85.5-39.5 148.3-39.5 24.4 0 108.2 2.6 168.9 80.3zm-86.1-199.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
                </svg>
              </button>
              {/* Google */}
              <button className="social-btn" aria-label="Sign up with Google">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
              {/* Facebook */}
              <button className="social-btn" aria-label="Sign up with Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
            </div>

            <div className="divider-text">or</div>

            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <input
                  className="signup-input"
                  name="name"
                  placeholder="Full name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>

              <div className="input-wrapper">
                <input
                  className="signup-input"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>

              <div className="input-wrapper">
                <input
                  className="signup-input"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={handleChange}
                  value={formData.password}
                  style={{ paddingRight: "44px" }}
                />
                <button
                  type="button"
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>

              <button type="submit" className="start-btn">Start</button>
            </form>

            <p className="login-text">
              Already have an account? <a href="/login">Log in</a>
            </p>
          </div>

          {/* RIGHT – image panel */}
          <div className="signup-right">
            <div className="signup-image-placeholder" />
            {/*
              To use a real image, replace the div above with:
              <img src="/your-mountain-image.jpg" alt="Mountain trail" className="signup-image" />
            */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;