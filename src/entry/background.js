function verifyWatch(mode, provider, videoId, property) {
  // query params: provider, videoId, property
  // path params : mode
  // return response
  // using fetch api
  return fetch(
    `http://localhost:8080/v1/watch-verifier/${mode}/verify-watch?provider=${provider}&videoId=${videoId}&property=${property}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    if (tab.url.indexOf("youtube.com/watch?") != -1) {
      // log video id
      console.log(tab.url.split("v=")[1].split("&")[0]);
      // verify watch
      verifyWatch(
        "youtube",
        "youtube",
        tab.url.split("v=")[1].split("&")[0],
        "title"
      ).then((response) => {
        console.log(response);
      });
    }
  }
});
