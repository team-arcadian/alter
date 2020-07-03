const { alter } = require("./src/index.js");

const log = console.log;

log("Starting main");

alter("https://twitter.com/timthetatman")
  .then(log)
  .catch(log);
