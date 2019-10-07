<template>
  <div>
    <button @click="counter--">−</button>
    <input v-model="counter"/>
    <button @click="counter++">+</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0,
      };
    },
  };
</script>

<style scoped>
  input {
    text-align: center;
  }
</style>
