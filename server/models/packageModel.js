const mongoose = require("mongoose");

// Define the package schema with validation
const packageSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  latest_version: { type: String, required: true },
  install_command: { type: String, required: true },
  docs: { type: String, required: true },
  image: { type: String, required: true },
  repository: { type: String, required: true },
  weekly_downloads: { type: String, required: true },
  license: { type: String, required: true },
  size: { type: String, required: true },
  total_files: { type: Number, required: true },
});

// Create a model from the schema
const Package = mongoose.model("Package", packageSchema);

module.exports = Package;
