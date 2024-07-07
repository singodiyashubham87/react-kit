const Package = require("../models/packageModel");

const packageController = {
  testPackage: async (req, res, next) => {
    console.log("Testing Package");
  },
};

module.exports = packageController;
