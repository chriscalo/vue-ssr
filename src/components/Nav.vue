<template>
  <nav>
    <a href="/">Home</a> |
    <a href="/about/">About</a>
  </nav>
</template>

<style lang="scss" scoped>
  nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
