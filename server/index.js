import Vue from "vue";
import express from "express";
import { start } from "express-start";
import html from "tagged-template-noop";

import { render } from "./vue-ssr";

import rootPage from "../pages/";
import aboutPage from "../pages/about/";

const app = express();

app.get("/", async (req, res, next) => {
  const content = htmlDoc({
    title: "Home",
    body: await render(rootPage),
  });
  res.send(content);
});

app.get("/about/", async (req, res, next) => {
  const content = htmlDoc({
    title: "About",
    body: await render(aboutPage),
  });
  res.send(content);
});

start(app);


function htmlDoc({ title = "", body = "" }) {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${ title }</title>
      </head>
      <body>
        ${ body }
      </body>
    </html>
  `;
}
