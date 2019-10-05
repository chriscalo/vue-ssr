<template>
  <main>
    <Nav/>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld :msg="`Welcome, ${$store.state.user}, to Your Vue.js App`"/>
    </div>
  </main>
</template>

<script>
  import HelloWorld from "@/components/HelloWorld.vue";
  import Nav from "@/components/Nav.vue"
  
  export default {
    name: "home",
    components: {
      HelloWorld,
      Nav,
    },
    async serverPrefetch() {
      console.log("serverPrefetch()");
      await this.$store.dispatch("getUser");
    },
  };
</script>
