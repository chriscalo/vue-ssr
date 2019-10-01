const Vue = require("vue");
const express = require("express");
const { start } = require("express-start");

const { render } = require("./vue-ssr");


const app = express();

app.get("/", async (req, res, next) => {
  const page = require("../pages/");
  const html = await render(page);
  res.send(html)
});

app.get("/about/", async (req, res, next) => {
  const page = require("../pages/about/");
  const html = await render(page);
  res.send(html)
});

start(app);
