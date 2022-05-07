const axios = require("axios");
const { copyDomain } = require("./../config");

const FetchImage = async (slug, chapter, img) => {
  var payload = {
    imagesrc: JSON.stringify(img),
  };

  await axios({
    url:`${copyDomain}/request-chapter/${slug}/${chapter}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    data: JSON.stringify(payload),
  })
    .then((ress) => {
      console.log(ress.data);
      console.log("done");
    });
};

module.exports = { FetchImage };
