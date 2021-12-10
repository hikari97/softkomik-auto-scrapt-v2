const fetch = require("node-fetch");
const { domain } = require("./../config");
const { ItemsFetch } = require("./deskripsi");

const FetchKomik = async (path) => {
  return await fetch(`${domain}/${path}`)
    .then((res) => res.json())
    .then((data) => {
      //Ada 40 Data Yang Di Map
      data.map((d, i) => {
        setTimeout(async () => {
          await FetchDeskripsi(d.slug, path)
            .then(() => {
              console.log(`${i + 1}. check : ${d.title}`);
            })
            .catch((err) => {
              console.log(err);
            });
        }, i * 60000);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const FetchDeskripsi = async (slug, path) => {
  return await fetch(`${domain}/${path}/${slug}`)
    .then((res) => res.json())
    .then(async (data) => {
      // console.log(data);
      await ItemsFetch(data.title, data.slug, data.LastCh, data.data, path);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { FetchKomik };
