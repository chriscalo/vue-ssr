import html from "tagged-template-noop";

const template = html`
  <div>
    <nav>
      <a href="/">Home</a>
      <a href="/about/">About</a>
    </nav>
    <h1>Hello, {{ name }}!</h1>
    <button @click="counter--">−</button>
    <span>{{ counter }}</span>
    <button @click="counter++">+</button>
  </div>
`;

function data() {
  return {
    name: "World",
    counter: 0,
  };
}

export default {
  template,
  data,
};
