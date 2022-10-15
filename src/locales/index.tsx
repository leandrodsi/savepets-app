import * as RNLocalize from 'react-native-localize';
import I18n, {TranslateOptions} from 'i18n-js';
import {LanguagePathType, LocalesTranslateType} from './types';
import en from './languages/en-US';
import pt from './languages/pt-BR';

const normalizeTranslate: LocalesTranslateType = {
  'en-US': 'en-US',
  'pt-BR': 'pt-BR',
  en: 'en-US',
  'pt-US': 'pt-BR',
};

I18n.translations = {
  'en-US': en,
  'pt-BR': pt,
};

const getLanguageByDevice = () => RNLocalize.getLocales()[0].languageTag;

const setLanguageToI18n = () => {
  const language = getLanguageByDevice();
  const translateNormalize = normalizeTranslate[language];
  const iHaveThisLanguage = I18n.translations.hasOwnProperty(
    translateNormalize,
  );
  if (iHaveThisLanguage) {
    // Mock
    I18n.locale = 'pt-BR';
    //I18n.locale = translateNormalize;
  } else {
    I18n.locale = 'pt-BR';
    I18n.defaultLocale = 'pt-BR';
  }
};

setLanguageToI18n();

export const translate = (key: LanguagePathType, options?: TranslateOptions) =>
  I18n.t(key, options);
