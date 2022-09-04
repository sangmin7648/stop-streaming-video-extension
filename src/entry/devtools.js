import { createApp } from "vue";
import App from "../view/devtools.vue";
chrome.devtools.panels.create("Stop Streaming Video", "", "devtools.html");
createApp(App).mount("#app");
