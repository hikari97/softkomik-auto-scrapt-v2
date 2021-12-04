const fetch = require("node-fetch");
const { domain } = require("./../config");
const { ItemsFetch } = require("./fetch-deskripsi");

const FetchKomik = async () => {
  return await fetch(`${domain}/api/list-komik`)
    .then((res) => res.json())
    .then((data) => {
      //Ada 40 Data Yang Di Map
      //   console.log(`Start`);
      data.map((d, i) => {
        setTimeout(async () => {
          await FetchDeskripsi(d.slug)
            .then(() => {
              console.log(`${i + 1}. check : ${d.title}`);
            })
            .catch((err) => {
              console.log(err);
            });
        }, i * 90000);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const FetchDeskripsi = async (slug) => {
  return await fetch(`${domain}/api/list-komik/${slug}`)
    .then((res) => res.json())
    .then(async (data) => {
      // console.log(data);
      await ItemsFetch(data.title, data.slug, data.LastCh, data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { FetchKomik };
