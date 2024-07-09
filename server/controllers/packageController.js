const Package = require("../models/packageModel");

const packageController = {
  getFirstPackage: async (req, res) => {
    const firstPackage = await Package.findOne();
    res.send(firstPackage);
  },
  getAllPackages: async (req, res, next) => {
    try {
      console.log("Trying to get all packages..");
      // Query all documents from the "packages" collection
      const packages = await Package.find();
      res.send(packages);
      // res.json(packages);
    } catch (error) {
      console.error("Error fetching packages:", error);
      throw error; // Optional: Handle or rethrow the error as needed
    }
  },
};

module.exports = packageController;
