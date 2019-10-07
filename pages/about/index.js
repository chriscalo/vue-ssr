import html from "tagged-template-noop";

const template = html`
  <div>
    <nav>
      <a href="/">Home</a>
      <a href="/about/">About</a>
    </nav>
    <h1>About</h1>
  </div>
`;

export default {
  template,
};
