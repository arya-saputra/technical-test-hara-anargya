import { createApp } from "vue";
import "./style.css";
import "../src/assets/css/index.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import router from "./router";

// 
const vueApp = createApp(App)

vueApp.component("Icon", Icon)
vueApp.mount("#app");
vueApp.use(router);
