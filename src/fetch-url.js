const { domain } = require('../config');
const fetch = require('node-fetch');
const { FetchImage } = require('./item-fetch-image');

// Fetch url Untuk Ambil Gambar
const FetchChapter = (slug, chapter) => {
  let slg = slug;
  if (slg == 'isekai-kenkokuki-indo') {
    slg = 'isekai-kenkokuki';
  } else if (slg == 'the-second-coming-of-gluttony-id') {
    slg = 'the-second-coming-of-gluttony';
  }

  console.log(`upload : ${slg} ${chapter}`);
  fetch(`${domain}/api/list-komik/${slg}/${chapter}`)
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
