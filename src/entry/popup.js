import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "../view/popup.vue";

const pinia = createPinia();

pinia.use((context) => {
  const storeId = context.store.$id;

  chrome.storage.local.get(storeId, (result) => {
    if (result[storeId]) {
      context.store.$patch(result[storeId]);
    }
  });

  context.store.$subscribe((mutation, state) => {
    chrome.storage.local.set({ [storeId]: state });
  });
});

createApp(App).use(pinia).mount("#app");
