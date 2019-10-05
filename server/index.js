import express from "express";
import { start } from "express-start";

import parcelServer from "./parcel";

const server = express();

server.use(parcelServer);

start(server);
