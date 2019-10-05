import Bundler from "parcel-bundler";
import path from "path";
import express from "express";

import { render } from "./vue-ssr";

export const server = express();
export default server;

const entryFiles = "./pages/**/*.vue";

const options = {
  // The out directory to put the build files in
  // defaults to dist
  outDir: "./.parcel",
  // The url to serve on
  // defaults to '/'
  publicUrl: "./",
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

const routes = {};

(() => {
  const bundler = new Bundler(entryFiles, options);
  
  bundler.on("bundled", async (bundle) => {
    await visitBundle(bundle);
  });
  
  bundler.bundle();
})();


server.use(async (req, res, next) => {
  const component = routes[req.url];
  
  if (component) {
    console.log(`Component found for route ${ req.url }`);
    const content = html({
      body: await render(component),
      title: "About",
    });
    res.send(content);
  } else {
    console.log(`Component not found for route ${ req.url }`);
    next();
  }
  
});

async function visitBundle(bundle) {
  const { name: bundlePath, type } = bundle;
  
  if (type === "js") {
    const buildDir = path.resolve(__dirname, "../.parcel");
    const relativePath = path.relative(buildDir, bundlePath);
    const route = `/${ relativePath.replace("index.js", "") }`;
    const { default: component } = await import(bundlePath);
    routes[route] = component;
  }
  
  const childBundles = Array.from(bundle.childBundles);
  for (const bundle of childBundles) {
    await visitBundle(bundle);
  }
}

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
