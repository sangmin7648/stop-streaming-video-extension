<template>
  <div class="home">
    <p>
      mode
      <input type="radio" v-model="mode" value="BLACKLIST" checked /> blacklist
      <input type="radio" v-model="mode" value="WHITELIST" /> whitelist
    </p>

    <p>Provider : {{ provider }}</p>

    <p>list <input type="text" v-model="list" /></p>

    <p><button @click="canWatch">Test</button></p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      list: "",
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
