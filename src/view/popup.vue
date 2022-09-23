<template>
  <h4 style="color: red">Stop Streaming Video - Beta v0.0.1</h4>
  <hr />
  <div class="home">
    <p>
      mode
      <input type="radio" v-model="providerStore.mode" value="BLACKLIST" />
      blacklist
      <input type="radio" v-model="providerStore.mode" value="WHITELIST" />
      whitelist
    </p>

    <p>Provider : {{ providerStore.provider }}</p>

    <p>
      category list
      <input type="text" v-model="providerStore.categoryList" />
    </p>
    <p>
      channel list
      <input type="text" v-model="providerStore.channelList" />
    </p>
  </div>
</template>

<script>
import { useProviderStore } from "@/store/providerstore.js";
import { parseProvider } from "@/service/providerparser.js";

export default {
  name: "HomeView",
  setup() {
    const providerStore = useProviderStore();

    return { providerStore };
  },
  created() {
    // get url from current chrome tab and assign to provider
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      this.provider.provider = parseProvider(tabs[0].url);
    });
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
