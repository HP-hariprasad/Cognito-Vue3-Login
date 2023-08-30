import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./assets/css/app.scss";
import authPlugin from "./plugins/auth-plugin";

// createApp(App).use(router).use(createPinia()).mount('#app')

const app = createApp(App);

app.use(router).use(createPinia());
app.use(authPlugin);

app.mount("#app");
