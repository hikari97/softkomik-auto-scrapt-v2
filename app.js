const { FetchKomik } = require('./nodejs-api/hal-awal');

console.log('start script');
// FetchKomik("manhwaindo");

FetchKomik('komikcast');

setInterval(() => {
  console.log('komikcast Start');
  FetchKomik('komikcast'); // Setiap 3 Jam
}, 10800000);

// setInterval(() => {
//   console.log("mangaid Start");
//   FetchKomik("mangaid"); // Setiap 7 Jam
// }, 25200000);

// FetchKomik("mangaid");

// const data = ["manhwaindo", "mangaid"];

// (async () => {
//   await FetchKomik("manhwaindo");

//   await FetchKomik("mangaid");
// })();

//kiryuu
//mangaid
//manhwaindo
//sektekomik
//komikstation
