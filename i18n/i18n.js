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
