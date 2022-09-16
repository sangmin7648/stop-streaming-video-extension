<template>
  <h4 style="color: red">Stop Streaming Video - Beta v0.0.1</h4>
  <hr />
  <div class="home">
    <p>
      mode
      <input type="radio" v-model="mode" value="BLACKLIST" checked /> blacklist
      <input type="radio" v-model="mode" value="WHITELIST" /> whitelist
    </p>

    <p>Provider : {{ providerStore.provider }}</p>

    <p>category list <input type="text" v-model="categoryList" /></p>
    <p>channel list <input type="text" v-model="channelList" /></p>
  </div>
</template>

<script>
import { useProviderStore } from "@/store/providerstore.js";

export default {
  name: "HomeView",
  setup() {
    const providerStore = useProviderStore();

    return { providerStore };
  },
  data() {
    return {
      categoryList: "",
      channelList: "",
      mode: "",
    };
  },
  methods: {},
};
</script>

<style>
body {
  width: 15rem;
  height: 20rem;
}
</style>
