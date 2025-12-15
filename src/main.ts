import { createApp } from "vue";
import { createPinia } from "pinia";
// pinia-plugin-persistedstate 是 Pinia 的一个插件，用来把 store 里的状态持久化保存起来。
// 刷新页面后，Pinia 里的数据不丢失。
import persist from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router";
import "./styles/index.scss";

const pinia = createPinia().use(persist);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
