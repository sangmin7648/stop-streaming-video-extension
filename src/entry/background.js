import { parseProvider, parseVideoId } from "@/service/providerparser.js";
import Providers from "@/service/provider.js";
import Property from "@/service/property.js";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && changeInfo.status === "complete") {
    verifyWatch(tabId, tab);
  }
});

function verifyWatch(tabId, tab) {
  const provider = parseProvider(tab.url);
  const videoId = parseVideoId(tab.url);

  chrome.storage.local.get("provider", (result) => {
    const mode = result.provider.mode;
    const categories = result.provider.categoryList.split(",");
    const properties = categories.map(
      (categoryVal) => new Property(Property.Types.CATEGORY, categoryVal)
    );

    if (Providers.YOUTUBE == provider && tab.url.includes("watch")) {
      console.log(videoId);
      verifyWatchRequest(mode, provider, videoId, properties)
        .then((response) => response.json())
        .then((data) => {
          const canWatch = data.canWatch;
          chrome.tabs.sendMessage(tabId, {
            provider: provider,
            videoId: videoId,
            canWatch: canWatch,
          });
        });
    }
  });
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
