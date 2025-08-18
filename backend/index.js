const express = require('express');
const cors = require('cors');
const { body, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./src/models/User');

const MONGO_URI = "mongodb://localhost:27017/properties";
const PORT = 8080;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.send('Application is running!');
});

// REGISTER
app.post(
  '/register',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password')
      .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
      .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
      .matches(/\d/).withMessage('Password must contain at least one number')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      const exists = await User.exists({ email });
      if (exists) {
        return res.status(400).json({
          status: 400,
          message: `Email already in use`
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ username, email, password: hashedPassword, role: "user" });

      return res.json({
        status: 200,
        data: { id: user._id, username: user.username, email: user.email, role: user.role },
        message: `Dear ${username}, account created successfully`
      });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// LOGIN
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email: email.trim() });
    if (!user) {
      return res.status(401).json({ message: 'Wrong email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Wrong email or password' });
    }

    res.json({
      status: 200,
      message: 'Login successful',
      data: { id: user._id, username: user.username, email: user.email, role: user.role }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Google Auth
app.post('/google-auth', async (req, res) => {
  try {
    const { email, name, sub } = req.body;
    if (!email || !name || !sub) {
      return res.status(400).json({ message: 'Missing user information from Google' });
    }

    let user = await User.findOne({ email });
    if (!user) {
      const hashedPassword = await bcrypt.hash(sub, 10);
      user = await User.create({
        username: name,
        email,
        password: hashedPassword,
        role: "user"
      });
    }

    res.status(200).json({
      status: 200,
      message: 'Google login successful',
      data: { id: user._id, username: user.username, email: user.email, role: user.role }
    });
  } catch (err) {
    console.error('Google Auth Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Middleware: check if admin
async function checkAdmin(req, res, next) {
  try {
    const email = req.query.email; // admin email passed via query param
    const user = await User.findOne({ email });
    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }
    next();
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}

// Admin route: Get all users (excluding password)
app.get('/users', checkAdmin, async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    res.json({ status: 200, data: users });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// DB Connection
mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB connected");

    // Seed an admin user if none exists
    const adminExists = await User.findOne({ role: "admin" });
    if (!adminExists) {
      const hashedPassword = await bcrypt.hash("Admin254", 10);
      await User.create({
        username: "admin",
        email: "admin@gmail.com",
        password: hashedPassword,
        role: "admin"
      });
      console.log("👑 Admin user created (email: admin@gmail.com | password: Admin254)");
    }

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
