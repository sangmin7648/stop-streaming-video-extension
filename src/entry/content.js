chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("content message", message, sender, sendResponse);

  if (!message.canWatch) {
    const block = document.createElement("div");
    block.innerHTML = "<h1>Blocked By Stop Streaming Video</h1>";
    block.style.color = "white";

    block.style.position = "absolute";
    block.style.top = "50%";
    block.style.left = "50%";
    block.style.transform = "translate(-50%, -50%)";

    const player = document.getElementById("ytd-player");
    player.parentElement.replaceChild(block, player);
  }
});
