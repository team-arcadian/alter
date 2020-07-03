import { parse } from "./parse.js";
import { rssify } from "./rssify.js";

const alter = async url => {
  const route = parse(url);
  const rss = await rssify(route);
  return rss;
};

export { alter };
