const fetch = require("node-fetch");
const { copyDomain } = require("./../config");

const FetchImage = async (slug, chapter, img) => {
  var payload = {
    imagesrc: JSON.stringify(img),
  };

  await fetch(`${copyDomain}/request-chapter/${slug}/${chapter}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log("done");
    });
};

module.exports = { FetchImage };
