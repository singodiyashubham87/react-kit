const app = require("./app")
const connectDatabase = require("./config/connectDatabase");
require("dotenv").config();

//CONFIG
const PORT = process.env.PORT || 8000;

// CONNECTING DATABASE -
connectDatabase();

// MAKING SERVER
const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
  );
});

// UNHANDLED PROMISE REJECTION -
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
