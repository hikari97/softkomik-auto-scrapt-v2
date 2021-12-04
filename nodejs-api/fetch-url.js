const { domain } = require("../config");
const fetch = require("node-fetch");
const { FetchImage } = require("./fetch-image");

// Fetch url Untuk Ambil Gambar
const FetchChapter = (slug, chapter, path) => {
  let slg = slug;
  console.log(`upload : ${slg} ${chapter}`);
  fetch(`${domain}/${path}/${slg}/${chapter}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.length);
      FetchImage(slug, chapter, data);
      //   ItemsFetch(slug, chapter, data);
      // console.log(`proses : ${slug}-${chapter}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { FetchChapter };
