import { parse } from "./parse";
import { rssify } from "./rssify";

const alter = url => {
  const route = parse(url);
  return rssify(route);
};

export { alter };
