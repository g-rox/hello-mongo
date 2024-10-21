const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const mongoose = require("mongoose");

const app = express();

const connectDb = async () => {
  await mongoose.connect(config.mongodb_uri);
};

// Middleware
app.use(cors());
app.use(express.json());

connectDb();

// Define your routes here
const routes = require("./routes/routes");
app.use("/api/example", routes);

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
