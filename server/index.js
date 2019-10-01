const Vue = require("vue");
const express = require("express");
const { start } = require("express-start");

const { render } = require("./vue-ssr");

const rootPage = new Vue({
  template: `
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/about/">About</a>
      </nav>
      <h1>Hello, {{ name }}!</h1>
    </div>
  `,
  data() {
    return {
      name: "Worldz",
    };
  },
});

const aboutPage = new Vue({
  template: `
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/about/">About</a>
      </nav>
      <h1>About</h1>
    </div>
  `,
});


const app = express();

app.get("/", async (req, res, next) => {
  const html = await render(rootPage);
  res.send(html)
});

app.get("/about/", async (req, res, next) => {
  const html = await render(aboutPage);
  res.send(html)
});

start(app);
