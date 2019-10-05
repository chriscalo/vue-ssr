import Bundler from "parcel-bundler";
import path from "path";
import express from "express";

import { render } from "./vue-ssr";

export const server = express();
export default server;

const serverBuildDir = path.resolve(__dirname, "../.parcel/server");
const clientBuildDir = path.resolve(__dirname, "../.parcel/client");
const entryFiles = "./pages/**/*.vue";

const serverOptions = {
  // The out directory to put the build files in
  // defaults to dist
  outDir: serverBuildDir,
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

const clientOptions = {
  // The out directory to put the build files in
  // defaults to dist
  outDir: clientBuildDir,
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

new Bundler(entryFiles, serverOptions).bundle();
new Bundler(entryFiles, clientOptions).bundle();

server.use(express.static(clientBuildDir));

server.use(async (req, res, next) => {
  const { url } = req;
  const bundlePath = path.join(outDir, url, "index.js");
  
  try {
    const { default: component } = await import(bundlePath);
    const content = html({
      body: await render(component),
    });
    res.send(content);
  } catch (error) {
    next();
  }
});

function html({ body = "", title = "",  }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <title>${ title }</title>
        <link href="/styles.css" rel="stylesheet"/>
      </head>
      <body>${ body }</body>
    </html>
  `;
}
