import Vue from "vue";
import path from "path";

// Step 1: Create a Vue instance
import { createBundleRenderer } from "vue-server-renderer";

const bundlePath = path.resolve(__dirname, "../dist/vue-ssr-server-bundle.json");

console.log({bundlePath});

// Step 2: Create a renderer
export const renderer = createBundleRenderer(bundlePath, {
  // runInNewContext: false, // recommended
  // template, // (optional) page template
  // clientManifest // (optional) client build manifest
});

export async function render(context) {
  // Step 3: Render the Vue instance to HTML
  try {
    return await renderer.renderToString(context);
  } catch (error) {
    console.error(error);
  }
}
