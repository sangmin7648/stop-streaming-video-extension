<template>
  <h4 style="color: red">Stop Streaming Video - Beta v0.0.1</h4>
  <hr />
  <div class="home">
    <p>
      mode
      <input type="radio" v-model="mode" value="BLACKLIST" checked /> blacklist
      <input type="radio" v-model="mode" value="WHITELIST" /> whitelist
    </p>

    <p>Provider : {{ provider }}</p>

    <p>category list <input type="text" v-model="categoryList" /></p>
    <p>channel list <input type="text" v-model="channelList" /></p>

    <p><button @click="canWatch">Test</button></p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      categoryList: "",
      channelList: "",
      mode: "",
      provider: "Youtube",
    };
  },
  methods: {
    canWatch() {
      console.log("send");
      axios
        .get(
          "http://localhost:8080/v1/watch-verifier/user/b9a87e60-2585-46e7-b9a5-b88948697a76/WHITELIST/verify-watch?provider=YOUTUBE&videoId=ypP4FgztjLI"
        )
        .then()
        .catch();
    },
  },
};
</script>

<style>
body {
  width: 15rem;
  height: 20rem;
}
</style>
