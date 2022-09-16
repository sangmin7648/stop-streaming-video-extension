import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "../view/popup.vue";

const pinia = createPinia();

createApp(App).use(pinia).mount("#app");
