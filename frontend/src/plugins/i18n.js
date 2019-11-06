import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "./language/en";
import ru from "./language/ru"

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: {
    ru,
    en
  }
});