import { parseProvider, parseVideoId } from "@/service/providerparser.js";
import Providers from "@/service/provider.js";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) =>
  verifyWatch(tabId, changeInfo, tab)
);

function verifyWatch(tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    const provider = parseProvider(tab.url);
    if (Providers.YOUTUBE == provider && tab.url.includes("watch")) {
      const videoId = parseVideoId(tab.url);
      const properties = [];
      verifyWatchRequest("WHITELIST", provider, videoId, properties).then(
        (response) => {
          console.log(response);
        }
      );
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
