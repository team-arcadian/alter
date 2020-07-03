const { parse } = require("./parse.js");
const { rssify } = require("./rssify.js");

const alter = async url => {
  const route = parse(url);
  console.log("Final route", route);
  const rss = await rssify(route);
  return rss;
};

module.exports = { alter };
