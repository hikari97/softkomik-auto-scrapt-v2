const axios = require('axios');
const { domain } = require('./../config');
const { ItemsFetch } = require('./deskripsi');

const FetchKomik = async (path) => {
  return await axios.get(`${domain}/${path}`)
    .then((ress) => {
      const data = ress.data;
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
        }, i * 120000);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const FetchDeskripsi = async (slug, path) => {
  return await axios.get(`${domain}/${path}/${slug}`)
    .then(async (ress) => {
      const data = ress.data;
      // console.log(data);
      await ItemsFetch(data.title, data.slug, data.LastCh, data.data, path);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { FetchKomik };
