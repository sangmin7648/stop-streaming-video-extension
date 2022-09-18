import Providers from "./provider";

function parseProvider(url) {
  const parsedUrl = new URL(url);
  const hostname = parsedUrl.hostname;
  const provider = hostname.split(".")[1].toUpperCase();
  return provider;
}

function parseVideoId(url) {
  const provider = parseProvider(url);
  if (Providers.YOUTUBE == provider) {
    const parsedUrl = new URL(url);
    const videoId = parsedUrl.searchParams.get("v");
    return videoId;
  }

  return "UNSUPPORTED_PROVIDER";
}

export { parseProvider, parseVideoId };
