import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/signup"); // ya "/login"
  };

  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={handleStart}>Get Started</button>
    </div>
  );
};

export default Landing;
