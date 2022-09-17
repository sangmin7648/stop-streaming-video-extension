import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useProviderStore = defineStore("provider", () => {
  const provider = ref(
    useLocalStorage("vueUseProvider", {
      mode: null,
      provider: null,
      categoryList: null,
      channelList: "test",
    })
  );

  return {
    provider,
  };
});
