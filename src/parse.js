const mapping = require("./config/mapping.js");

const map = url => {
  const [[key, result]] = Object.entries(mapping).filter(([key, val]) =>
    url.includes(key)
  );
  console.log(`Result ${result}`);
  return result;
};

const vars = url => {
  const [protocol, space, domain, ...vars] = url.split("/");
  return vars;
};

const fill = (vars, template) => {
  const reducer = (total, current, index) => {
    return total.replace(`$${index + 1}`, current);
  };
  const filled = vars.reduce(reducer, template);
  return filled;
};

const parse = url => {
  const route = map(url);
  const variables = vars(url);
  const filled = fill(variables, route);
  return filled;
};

module.exports = { parse };
