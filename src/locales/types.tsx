import {ComponentsLanguageType} from 'components/Components.types';
import {
  ErrorsLanguageType,
  GlobalLanguageType,
} from 'global/types/languages.type';
// import {HomeLanguageType} from 'modules/home/Home.type';

// @ts-ignore
type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[],
];

type Leaves<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {[K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>>}[keyof T]
  : '';

export interface LocalesTranslateType {
  [index: string]: string;
}

export interface LanguageType {
  global: GlobalLanguageType;
  components: ComponentsLanguageType;
  modules: ModulesLanguageType;
  errors: ErrorsLanguageType;
}

export type LanguagePathType = Leaves<LanguageType>;

interface ModulesLanguageType {
  // home: HomeLanguageType;
}

export interface TranslateLanguageType<T> {
  ptBr: T;
  enUs: T;
}
