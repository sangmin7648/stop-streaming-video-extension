// function to parse provider name from url
// ex) www.youtube.com -> YOUTUBE
function parseProvider(url) {
  // parse url
  const parsedUrl = new URL(url);
  // get hostname
  const hostname = parsedUrl.hostname;
  // get provider name
  const provider = hostname.split(".")[1].toUpperCase();
  // return provider name
  return provider;
}

// function to parse video id from url
// ex) www.youtube.com/watch?v=videoId -> videoId
function parseYoutubeVideoId(url) {
  // parse url
  const parsedUrl = new URL(url);
  // get video id
  const videoId = parsedUrl.searchParams.get("v");
  // return video id
  return videoId;
}

export { parseProvider, parseYoutubeVideoId };
