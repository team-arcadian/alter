import rsshub from "rsshub";

rsshub.init(); // pass configuration

const rssify = route =>
  new Promise((resolve, reject) => {
    rsshub
      .request(url)
      .then(resolve)
      .catch(reject);
  });

export { rssify };
