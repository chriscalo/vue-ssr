import Bundler from "parcel-bundler";
import path from "path";
import express from "express";

import { render } from "./vue-ssr";

export const server = express();
export default server;

const outDir = path.resolve(__dirname, "../.parcel");
const entryFiles = "./pages/**/*.vue";

const options = {
  // The out directory to put the build files in
  // defaults to dist
  outDir,
  // Whether to watch the files and rebuild them on change
  // defaults to process.env.NODE_ENV !== 'production'
  watch: true,
  // Browser/node/electron
  // defaults to browser
  target: "node",
  // Enable or disable HMR while watching
  hmr: true,
  // Enable or disable auto install of missing dependencies found during
  // bundling
  autoInstall: true,
};

new Bundler(entryFiles, options).bundle();

server.use(async (req, res, next) => {
  const { url } = req;
  const bundlePath = path.join(outDir, url, "index.js");
  const { default: component } = await import(bundlePath);
  
  if (component) {
    const content = html({
      body: await render(component),
      title: "About",
    });
    res.send(content);
  } else {
    next();
  }
});

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
