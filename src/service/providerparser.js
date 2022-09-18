function parseProvider(url) {
  const parsedUrl = new URL(url);
  const hostname = parsedUrl.hostname;
  const provider = hostname.split(".")[1].toUpperCase();
  return provider;
}

function parseVideoId(url) {
  const provider = parseProvider(url);
  if (provider === "YOUTUBE") {
    const parsedUrl = new URL(url);
    const videoId = parsedUrl.searchParams.get("v");
    return videoId;
  }

  return "UNSUPPORTED_PROVIDER";
}

export { parseProvider, parseVideoId };
