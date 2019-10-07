import Vue from "vue";
import page from "./index.vue";
import api from "../api";


export async function createApp({
  beforeApp = () => {},
  afterApp = () => {},
} = {}) {
  
  const app = new Vue({
    render: h => h(page),
  });
  
  const result = {
    app,
  };
  
  await afterApp(result);
  return result;
}
