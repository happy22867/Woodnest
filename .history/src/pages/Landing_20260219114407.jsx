import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/signup");
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #1a2a3a 0%, #2d4a5a 100%)",
      padding: "0"
    }}>
      {/* Main Container - Full screen on mobile, card on desktop */}
      <div style={{
        width: "100%",
        maxWidth: "500px",
        height: "100vh",
        maxHeight: "800px",
        borderRadius: window.innerWidth <= 768 ? "0" : "32px",
        overflow: "hidden",
        boxShadow: window.innerWidth <= 768 ? "none" : "0 25px 80px rgba(0,0,0,0.4)",
        position: "relative"
      }}>
        
        {/* Cycle Image Background */}
        <div style={{
          width: "100%",
          height: "100%",
          background: `url('https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=1000&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: window.innerWidth <= 768 ? "40px 24px" : "60px 40px",
          position: "relative"
        }}>
          
          {/* Dark gradient overlay */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)",
            zIndex: 1
          }}></div>

          {/* Content */}
          <div style={{
            position: "relative",
            zIndex: 2
          }}>
            {/* Heading */}
            <h1 style={{
              color: "white",
              fontSize: window.innerWidth <= 768 ? "28px" : "36px",
              fontWeight: "bold",
              lineHeight: "1.3",
              marginBottom: "40px",
              textShadow: "0 2px 15px rgba(0,0,0,0.5)"
            }}>
              Revolutionizing Your<br />
              Ride, One <span style={{ 
                color: "#c4f542",
                textShadow: "0 0 20px rgba(196, 245, 66, 0.3)"
              }}>Smart Bike</span><br />
              at a Time.
            </h1>

            {/* Start Button with Icon */}
            <button
              onClick={handleStart}
              style={{
                background: "#c4f542",
                color: "#1a2a3a",
                padding: "18px 36px",
                border: "3px solid #1a2a3a",
                borderRadius: "60px",
                fontSize: "17px",
                fontWeight: "700",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                transition: "all 0.3s ease",
                boxShadow: "0 6px 25px rgba(196, 245, 66, 0.5)",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 10px 35px rgba(196, 245, 66, 0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 25px rgba(196, 245, 66, 0.5)";
              }}
            >
              {/* Bike Icon */}
              <div style={{
                width: "32px",
                height: "32px",
                background: "#1a2a3a",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#c4f542"
              }}>
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <circle cx="5.5" cy="17.5" r="3.5"></circle>
                  <circle cx="18.5" cy="17.5" r="3.5"></circle>
                  <path d="M15 6h3l2 5"></path>
                  <path d="M12 17V9"></path>
                  <path d="M6 9l6-3 3 3"></path>
                </svg>
              </div>
              
              <span>Start now</span>
              
              {/* Arrow */}
              <span style={{
                fontSize: "20px",
                marginLeft: "4px",
                letterSpacing: "-2px"
              }}>
                →→→
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;