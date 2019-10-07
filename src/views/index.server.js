import Vue from "vue";
import page from "./index.vue";

export default async (context) => {
  return new Vue({
    render: h => h(page),
  });
};
