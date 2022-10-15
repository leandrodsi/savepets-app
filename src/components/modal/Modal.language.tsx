import {TranslateLanguageType} from 'locales/types';
import {default as ModalMessage} from './components/message/ModalMessage.language';
import {ModalLanguageType} from './Modal.types';

const lang: TranslateLanguageType<ModalLanguageType> = {
  ptBr: {
    message: ModalMessage.ptBr,
  },
  enUs: {
    message: ModalMessage.enUs,
  },
};

export default lang;
