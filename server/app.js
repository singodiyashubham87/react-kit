const express = require("express");
const app = express();
const cors = require("cors");

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ROUTES
const packageRoute = require("./routes/packageRoute.js");

// ENDPOINTS
app.use("/package", packageRoute);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

module.exports = app;
