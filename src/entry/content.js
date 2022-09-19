chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("content message", message, sender, sendResponse);
  const player = document.getElementById("ytd-player");
  player.parentElement.removeChild(player);
});
