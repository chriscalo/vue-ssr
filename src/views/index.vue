<template>
  <div id="app">
    <main>
      <Nav/>
      <div class="home">
        <img
          alt="Vue logo"
          src="../assets/logo.png"
          width="200" height="200"
        />
        <Counter/>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
    </main>
  </div>
</template>

<script>
  import HelloWorld from "@/components/HelloWorld.vue";
  import Counter from "@/components/Counter.vue";
  import Nav from "@/components/Nav.vue"
  
  export default {
    name: "home",
    components: {
      HelloWorld,
      Counter,
      Nav,
    },
    async serverPrefetch() {
      console.log("serverPrefetch()");
      // await this.$store.dispatch("getUser");
    },
  };
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
