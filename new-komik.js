const fetch = require("node-fetch");
const { domain } = require("./config");
const { ItemsFetch } = require("./nodejs-api/deskripsi");

const data = [
  {
    title: "yajin-tensei-karate-survivor-in-another-world",
    slug: "yajin-tensei-karate-survivor-in-another-world",
  },
];

//manhwaindo
//mangaid
//komikstation

data.map((d, i) => {
  setTimeout(async () => {
    await FetchDeskripsi(d.slug, "komikstation")
      .then(() => {
        console.log(`${i + 1}. check : ${d.title}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }, i * 90000);
});

const FetchDeskripsi = async (slug, path) => {
  return await fetch(`${domain}/${path}/${slug}`)
    .then((res) => res.json())
    .then(async (data) => {
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
