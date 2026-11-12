const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

//Security & Utility Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Morgan logger for development environment
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Test Root Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message:
      "Welcome to Nexus Cart Backend API (Multi-Vendor & Multi-Language Core)",
  });
});

// Handle 404 Undefined Routes
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
});

module.exports = app;
