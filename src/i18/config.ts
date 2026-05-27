import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import bn from './locales/bn.json';
import hi from './locales/hi.json';

// 1. Initialize with your standard options
i18n
  .use(LanguageDetector)   
  .use(initReactI18next)   
  .init({
    resources: {
      en: { translation: en },
      bn: { translation: bn },
      hi: { translation: hi }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React safely handles XSS by default
    }
  });

// 2. Add your custom number formatter safely via the services API 👇
// This bypasses the strict 'InterpolationOptions' object type restriction completely.
i18n.services.formatter?.add('number', (value, lng) => {
  if (typeof value === 'number' || (!isNaN(value) && value !== '')) {
    return new Intl.NumberFormat(lng).format(Number(value));
  }
  return value;
});

export default i18n;