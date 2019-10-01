const express = require("express");
const { start } = require("express-start");

const app = express();

app.get("/", (req, res, next) => {
  res.send("Hello, World!")
});

start(app);
