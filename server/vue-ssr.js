import Vue from "vue";

// Step 1: Create a Vue instance
import { createRenderer } from "vue-server-renderer";

// Step 2: Create a renderer
const renderer = createRenderer();

export async function render(component) {
  // Step 3: Render the Vue instance to HTML
  try {
    if (!(component instanceof Vue)) {
      component = new Vue(component)
    }
    return await renderer.renderToString(component);
  } catch (error) {
    console.error(error);
  }
}
