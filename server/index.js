import Vue from "vue";
import express from "express";
import { start } from "express-start";

import parcelServer from "./parcel";
import { render } from "./vue-ssr";

// import rootPage from "../pages/";
// import aboutPage from "../pages/about/";


const app = express();

// app.get("/", async (req, res, next) => {
//   const content = html({
//     body: await render(rootPage),
//     title: "About",
//   });
//   res.send(content);
// });
//
// app.get("/about/", async (req, res, next) => {
//   const content = html({
//     body: await render(aboutPage),
//     title: "About",
//   });
//   res.send(content);
// });

app.use(parcelServer);

start(app);

function html({ body = "", title = "" }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${ title }</title>
      </head>
      <body>${ body }</body>
    </html>
  `;
}
