import i18next from "i18next";
import translationRu from "./_ru.json"
import translationEn from "./_en.json";

i18next.init({
  resources: {
    ru: {
      translation: translationRu
    },
    en: {
      translation: translationEn
    },
  },
  lng: process.env.LANG,
});

export default function (str) {
  return i18next.t(str);
}