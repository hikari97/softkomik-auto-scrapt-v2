const { PeriksaChapter } = require("./periksa-data");
const fetch = require("node-fetch");
const { domain, mainDomain } = require("./../config");

//Tampilkan Data Deskripsi Komik Dalam Array
const ItemsFetch = (title, slug, lastch, data) => {
  if (lastch === "") {
    //
    // sort data dari kecil ke besar
    let dataS = data.sort(function (a, b) {
      return a - b;
    });
    // Loop
    dataS.map((chapter, index) => {
      setTimeout(() => {
        PeriksaChapter(title, slug, chapter);
        // image.FetchChapter(slug, chapter);
      }, index * 60000);
    });
  } else if (lastch != "hasil tidak di temukan") {
    //
    // sort data dari kecil ke besar
    let dataS = data.sort(function (a, b) {
      return a - b;
    });
    // Loop
    dataS.map(async (chapter, index) => {
      let csr = chapter.replace("-", ".");
      let chr = csr.replace("/", "");
      let ch = Number(chr);
      let lastCh = Number(lastch);
      // let lastCh = Number(4);
      if (ch > lastCh || isNaN(ch)) {
        setTimeout(async () => {
          await PeriksaChapter(title, slug, chapter);
        }, index * 300);
        // console.log(`${title} : ${ch} > ${lastCh} = benar `);
      }
    });
  } else {
    fetch(`${mainDomain}/check-chapter-komik/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          fetch(
            `${domain}/firebase?title=${title}&slug=${slug}&deskripsi=komik+belum+ada`
          )
            .then((res) => res.json())
            .then(() => {
              console.log(`komik ${title} sudah di tambah di DB`);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  }
};

module.exports = { ItemsFetch };
