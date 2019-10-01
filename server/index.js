const express = require("express");
const { start } = require("express-start");

const { render } = require("./vue-ssr");

const app = express();

app.get("/", async (req, res, next) => {
  const html = await render();
  res.send(html)
});

start(app);
