require("./db/config/index");
const express = require("express"),
  app = express();

// Parse incoming JSON into objects
app.use(express.json());

// Unauthenticated Routes
app.use("/api/users", openRoutes);

module.exports = app;
