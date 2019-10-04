<template>
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
</template>

<script>
  export default {
    data() {
      return {
        name: "World",
        counter: 0,
      };
    },
  };
</script>
