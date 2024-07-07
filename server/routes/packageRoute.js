const express = require("express");
const packageController = require("../controllers/packageController");
const router = express.Router();

// PACKAGE ROUTES
router.get("/test", packageController.testPackage);

module.exports = router;
