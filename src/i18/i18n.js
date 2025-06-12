import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import zh from './zh.json';

// 從 localStorage 取得儲存的語言
const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
    },
    lng: savedLanguage, // 使用儲存的語言
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;