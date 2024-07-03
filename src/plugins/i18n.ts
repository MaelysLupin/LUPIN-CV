import { reactive } from "vue";
import { createI18n } from "vue-i18n";

import en from './locales/en.json';
import fr from './locales/fr.json';

export const globalLocale = reactive({
  currentLocale: "fr",
});

export const messages = {
  en, 
  fr
};

export const i18n = createI18n({
    legacy: false,
    locale: globalLocale.currentLocale, 
    messages, 
})

//use it with : {{ $t('nom') }}