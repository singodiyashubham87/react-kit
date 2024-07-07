const mongoose = require("mongoose");
require("dotenv").config();

// DATABASE_URI
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:8080";

// Function to connect to MongoDB
const connectDatabase = async () => {
  try {
    console.log("Connecting to MongoDB...");
    const connection = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB connected with server: ${connection.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

module.exports = connectDatabase;
