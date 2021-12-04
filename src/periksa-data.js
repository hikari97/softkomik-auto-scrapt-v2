const fetch = require("node-fetch");
const { mainDomain } = require("./../config");
const { FetchChapter } = require("./fetch-url");
//Periksa Ketersediaan Chapter
const PeriksaChapter = async (title, slug, chapter) => {
  console.log(`Check : ${title} ${chapter}`);
  return await fetch(`${mainDomain}/check-chapter/${slug}/${chapter}`)
    .then((res) => res.json())
    .then(async (data) => {
      if (!data) {
        await FetchChapter(slug, chapter);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { PeriksaChapter };
