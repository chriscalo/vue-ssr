import express from "express";
import { start } from "express-start";

import parcelServer from "./parcel";

const server = express();

server.use(logging);
server.use(express.static("public"));
server.use(parcelServer);
server.use(notFound);

start(server);

function logging(req, res, next) {
  console.log(req.url);
  next();
}

function notFound(req, res, next) {
  res.status(404).send(`Cannot ${req.method} ${req.url}`);
}
