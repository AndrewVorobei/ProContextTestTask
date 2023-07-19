import { createApp } from "vue";
import "./style.scss";
import { createStore } from "vuex";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");
app.use(createStore);
