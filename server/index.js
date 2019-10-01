import Vue from "vue";
import express from "express";
import { start } from "express-start";

import { render } from "./vue-ssr";

import rootPage from "../pages/";
import aboutPage from "../pages/about/";

const app = express();

app.get("/", async (req, res, next) => {
  const html = await render(rootPage);
  res.send(html)
});

app.get("/about/", async (req, res, next) => {
  const html = await render(aboutPage);
  res.send(html)
});

start(app);
