const Vue = require("vue");

// Step 1: Create a Vue instance
const { createRenderer } = require("vue-server-renderer");

// Step 2: Create a renderer
const renderer = createRenderer();

async function render(component) {
  // Step 3: Render the Vue instance to HTML
  try {
    if (!(component instanceof Vue)) {
      component = new Vue(component)
    }
    const html = await renderer.renderToString(component);
    return html;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  render,
};
