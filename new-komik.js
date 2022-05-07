const axios = require("axios");
const { domain } = require("./config");
const { ItemsFetch } = require("./nodejs-api/deskripsi");

const data = [
  {
    title: "the-strongest-harem-of-nobles",
    slug: "the-strongest-harem-of-nobles",
  },
];
 
//manhwaindo
//mangaid
//komikstation
//komikcast

data.map((d, i) => {
  setTimeout(async () => {
    await FetchDeskripsi(d.slug, "komikcast")
      .then(() => {
        console.log(`${i + 1}. check : ${d.title}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }, i * 1200000);
});

const FetchDeskripsi = async (slug, path) => {
  return await axios.get(`${domain}/${path}/${slug}`)
    .then(async (ress) => {
      const data = ress.data;
      // console.log(data);
      const sort = data.data.sort(function (a, b) {
        return a - b;
      });
      console.log(sort);
      await ItemsFetch(data.title, data.slug, data.LastCh, sort, path);
    })
    .catch((err) => {
      console.log(err);
    });
};
