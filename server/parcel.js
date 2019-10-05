import Bundler from "parcel-bundler";
import path from "path";
import express from "express";

import { render } from "./vue-ssr";

export const server = express();
export default server;

const buildDir = path.resolve(__dirname, "../.parcel");
const entryFiles = "./pages/**/*.html";

const options = {
  // The out directory to put the build files in
  // defaults to dist
  outDir: buildDir,
  // Whether to watch the files and rebuild them on change
  // defaults to process.env.NODE_ENV !== 'production'
  watch: true,
  // Browser/node/electron
  // defaults to browser
  target: "browser",
  // Enable or disable HMR while watching
  hmr: true,
  // Enable or disable auto install of missing dependencies found during
  // bundling
  autoInstall: true,
};

new Bundler(entryFiles, options).bundle();

server.use(express.static(buildDir));

// server.use(async (req, res, next) => {
//   const { url } = req;
//   const bundlePath = path.join(outDir, url, "index.js");
//
//   try {
//     const { default: component } = await import(bundlePath);
//     const content = html({
//       body: await render(component),
//     });
//     res.send(content);
//   } catch (error) {
//     next();
//   }
// });
