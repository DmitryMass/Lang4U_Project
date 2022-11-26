import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';
import { eng } from '../dictionary/eng';
import { ua } from '../dictionary/ua';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: eng },
    ua: { translation: ua },
  },
  lng: 'ua',
  fallbackLng: 'ua',
  interpolation: { escapeValue: false },
});

export default i18n;
