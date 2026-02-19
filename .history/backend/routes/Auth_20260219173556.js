  const express = require("express");
  const router = express.Router();
  const bcrypt = require("bcryptjs");
  const jwt = require("jsonwebtoken");
  const User = require("../models/User");

  router.post("/signup", async (req, res) => {
    try {
      const { name, email, password } = req.body;
      console.log(password);

      // Check all fields exist and are non-empty strings
      if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const trimmedName = name.trim();
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();

      // Check after trimming too
      if (!trimmedName || !trimmedEmail || !trimmedPassword) {
        return res.status(400).json({ message: "All fields are required" });
      }

      if (trimmedPassword.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters" });
      }

      const existingUser = await User.findOne({ email: trimmedEmail });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(trimmedPassword, 10);

      const user = new User({
        name: trimmedName,
        email: trimmedEmail,
        password: hashedPassword,
      });

      await user.save();

      res.status(201).json({ message: "Signup successful" });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  });

  router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();

      if (!trimmedEmail || !trimmedPassword) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const user = await User.findOne({ email: trimmedEmail });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const isMatch = await bcrypt.compare(trimmedPassword, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.json({
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  });

  router.get("/profile", async (req, res) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) return res.status(401).json({ message: "Unauthorized" });

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select("-password");

      res.json(user);
    } catch (err) {
      res.status(401).json({ message: "Invalid token" });
    }
  });

  router.post("/logout", (req, res) => {
  return res.status(200).json({
    message: "Logout successful"
  });
});

  module.exports = router;