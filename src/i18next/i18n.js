import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./resources.js"

i18n.use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources,
    interpolation: {
    escapeValue: false,
  },
});