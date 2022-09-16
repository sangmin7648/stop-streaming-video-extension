import { defineStore } from "pinia";

export const useProviderStore = defineStore({
  id: "provider",
  state: () => ({
    provider: null,
  }),
});
