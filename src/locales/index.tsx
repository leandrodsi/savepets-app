import {I18n, TranslateOptions} from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import en from './languages/en-US';
import pt from './languages/pt-BR';
import {LocalesTranslateType} from './types';

const i18n = new I18n({
  'en-US': en,
  'pt-BR': pt,
});

const normalizeTranslate: LocalesTranslateType = {
  'en-US': 'en-US',
  'pt-BR': 'pt-BR',
  en: 'en-US',
  'pt-US': 'pt-BR',
};

const getLanguageByDevice = () => RNLocalize.getLocales()[0].languageTag;

const setLanguageToI18n = () => {
  const language = getLanguageByDevice();
  const translateNormalize = normalizeTranslate[language];
  const iHaveThisLanguage =
    i18n.translations.hasOwnProperty(translateNormalize);
  if (iHaveThisLanguage) {
    i18n.locale = translateNormalize;
    i18n.locale = translateNormalize;
  } else {
    i18n.locale = 'pt-BR';
    i18n.defaultLocale = 'pt-BR';
  }
};

setLanguageToI18n();

export const translate = (key: string, options?: TranslateOptions) =>
  i18n.t(key, options);
