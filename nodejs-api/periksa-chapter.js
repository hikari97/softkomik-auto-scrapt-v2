const axios = require("axios");
const { mainDomain } = require("./../config");
const { FetchChapter } = require("./fetch-url");
//Periksa Ketersediaan Chapter
const PeriksaChapter = async (title, slug, chapter, path) => {
  console.log(`Check : ${title} ${chapter}`);
  return await axios.get(`${mainDomain}/check-chapter/${slug}/${chapter}`)
    .then(async (ress) => {
      const data = ress.data;
      if (!data) {
        await FetchChapter(slug, chapter, path);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { PeriksaChapter };
