const User = require("../models/user.model");

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public

const register = async (req, res) => {
  try {
    const { name, email, password, role, language } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email is already in use. Please login or use another email.",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
      role: role || "customer",
      language: language || "en",
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        language: user.language,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports = { register };
