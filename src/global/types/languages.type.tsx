export interface GlobalLanguageType {
  change: string;
  cpf: string;
}

interface ErrorApiBaseType {
  message: string;
}

interface ErrorApiType extends ErrorApiBaseType {
  title: string;
}

export interface ErrorsLanguageType {
  default: ErrorApiType;
  sessionExpired: ErrorApiType;
  offline: ErrorApiBaseType;
}
