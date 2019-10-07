import Vue from "vue";
import page from "./index.vue";


const app = new Vue({
  render: h => h(page),
});
// store.replaceState(window.__INITIAL_STATE__);
app.$mount("#app");
