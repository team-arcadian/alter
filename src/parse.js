import mapping from "./config/mapping.js";

const parse = url => {
  const route = map(url);
  return route;
};

const map = url => {
  const [result] = Object.keys(mapping).filter(key => key.includes(url));
  return result;
};

export { parse };
