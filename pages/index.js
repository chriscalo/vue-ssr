export default {
  template: `
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
  `,
  data() {
    return {
      name: "World",
      counter: 0,
    };
  },
};
