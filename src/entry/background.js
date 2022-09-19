import { parseProvider, parseVideoId } from "@/service/providerparser.js";
import Providers from "@/service/provider.js";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) =>
  verifyWatch(tabId, changeInfo, tab)
);

function verifyWatch(tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    const provider = parseProvider(tab.url);
    const videoId = parseVideoId(tab.url);
    const properties = [];
    const mode = "WHITELIST";

    if (Providers.YOUTUBE == provider && tab.url.includes("watch")) {
      console.log(videoId);
      verifyWatchRequest(mode, provider, videoId, properties)
        .then((response) => response.json())
        .then((data) => {
          const canWatch = data.canWatch;
          console.log(canWatch);
          console.log("hi");
          chrome.tabs.sendMessage(tabId, {
            provider: provider,
            videoId: videoId,
            canWatch: canWatch,
          });
        });
    }
  }
}

function verifyWatchRequest(mode, provider, videoId, properties) {
  return fetch(`http://localhost:8080/v1/watch-verifier/verify-watch`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mode,
      provider,
      videoId,
      properties,
    }),
  });
}
