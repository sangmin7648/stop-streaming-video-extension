const block = createBlock();

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("content message", message, sender, sendResponse);
  const player = document.getElementById("ytd-player");
  player.parentNode.insertBefore(block, player.nextSibling);

  if (message.canWatch) {
    player.style.visibility = "visible";
    block.style.visibility = "hidden";
  } else {
    player.style.visibility = "hidden";
    block.style.visibility = "visible";
    const video = document.querySelector("video");
    setTimeout(() => {
      video.pause();
    }, 1000);
  }
});

function createBlock() {
  const block = document.createElement("div");
  block.innerHTML = "<h1>Blocked By Stop Streaming Video</h1>";
  block.style.color = "gray";

  block.style.position = "absolute";
  block.style.top = "50%";
  block.style.left = "50%";
  block.style.transform = "translate(-50%, -50%)";

  return block;
}
