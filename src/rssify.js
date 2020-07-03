const rsshub = require("rsshub");

rsshub.init(); // pass configuration

const rssify = route =>
  new Promise((resolve, reject) => {
    console.log(`Starting RSSHub with ${route}`);
    rsshub
      .request(route)
      .then(resolve)
      .catch(err => reject(`The follow error has occured ${err}`));
  });

module.exports = { rssify };
