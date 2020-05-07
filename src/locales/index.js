import I18n from 'react-native-i18n';
import en from './en-US';
import pt from './pt-BR';
import zh from './zh-CN';

I18n.translations = {
  en,
  pt,
  zh,
  'en-US': en,
  en_US: en,
};

I18n.fallbacks = true;

export const translate = (key) => I18n.t(key);
