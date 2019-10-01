// Step 1: Create a Vue instance
const Vue = require('vue');
const { createRenderer } = require('vue-server-renderer');

const app = new Vue({
  template: `<h1>Hello, World!</h1>`,
});

// Step 2: Create a renderer
const renderer = createRenderer();

async function render(component = app) {
  // Step 3: Render the Vue instance to HTML
  try {
    const html = await renderer.renderToString(component);
    return html;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  render,
};
