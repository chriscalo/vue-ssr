module.exports = {
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
};
