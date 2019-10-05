import Vue from "vue";
import Router from "vue-router";
import index from "./views/index.vue";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
      {
        path: "/",
        name: "home",
        component: index
      },
      {
        path: "/about/",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "./views/about/index.vue")
      }
    ]
  });
}
