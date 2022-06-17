// import i18next from "i18next";
// import translationRu from "./_ru.json";
// import translationEn from "./_en.json";

const i18next = require("i18next");
const translationRu = require("./_ru.json");
const translationEn = require("./_en.json");

i18next.init({
  resources: {
    ru: {
      translation: translationRu,
    },
    en: {
      translation: translationEn,
    },
  },
  lng: process.env.LANG,
});

export default function (str) {
  return i18next.t(str);
}

// lng: process.env.LANG,
// lng: "ru",
