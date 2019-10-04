import Bundler from "parcel-bundler";
import path from "path";
import express from "express";

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

const dev = true;

const routes = [];

const bundler = new Bundler(entryFiles, options);

if (dev) {
  
  bundler.on("bundled", bundle => {
    visitBundle(bundle);
  });
  
  bundler.bundle();
}

server.use(bundler.middleware());
server.use((req, res, next) => {
  console.log(req.url);
  console.log(routes);
  res.send("yikes");
});





function visitBundle(bundle) {
  const { name, type } = bundle;
  if (type === "js") {
    const buildDir = path.resolve(__dirname, "../.parcel");
    const route = path.relative(buildDir, name);
    routes.push(route);
  }
  console.log({ name, type });
  const childBundles = Array.from(bundle.childBundles);
  for (const bundle of childBundles) {
    visitBundle(bundle);
  }
}
