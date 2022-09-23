import { ref } from "vue";
import { defineStore } from "pinia";

export const useProviderStore = defineStore("provider", () => {
  const mode = ref(null);
  const provider = ref(null);
  const categoryList = ref(null);
  const channelList = ref(null);

  return { mode, provider, categoryList, channelList };
});
