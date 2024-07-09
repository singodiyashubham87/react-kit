const express = require("express");
const packageController = require("../controllers/packageController");
const router = express.Router();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// PACKAGE ROUTES
router.get("/first-package", packageController.getFirstPackage);
router.get("/all-packages", packageController.getAllPackages);


module.exports = router;
