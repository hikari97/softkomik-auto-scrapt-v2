const { domain } = require("../config");
const axios = require("axios");
const { FetchImage } = require("./fetch-image");

// Fetch url Untuk Ambil Gambar
const FetchChapter = (slug, chapter, path) => {
  let slg = slug;
  console.log(`upload : ${slg} ${chapter}`);
  axios.get(`${domain}/${path}/${slg}/${chapter}`)
    .then((ress) => {
      const data = ress.data;
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
