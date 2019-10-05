import express from "express";
import { start } from "express-start";

// server.js
import { renderer } from "./vue-ssr";


const server = express();


server.use(async (req, res, next) => {
  const context = { url: req.url }
  console.log(context);
  
  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.error(err);
      if (err.code === 404) {
        res.status(404).end('Page not found')
      } else {
        res.status(500).end('Internal Server Error')
      }
    } else {
      res.end(html)
    }
  })
})

start(server);
