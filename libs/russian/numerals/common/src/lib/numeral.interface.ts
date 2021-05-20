export enum PhraseNumeralType {
  Application = 'application',
  Credit = 'credit',
  Currency = 'currency',
  Loan = 'loan',
}

export const PHRASE_NUMERAL_FORMS: Record<PhraseNumeralType, [string, string, string]> = {
  [PhraseNumeralType.Application]: ['заявка', 'заявки', 'заявок'],
  [PhraseNumeralType.Credit]: ['кредит', 'кредита', 'кредитов'],
  [PhraseNumeralType.Currency]: ['рубль', 'рубля', 'рублей'],
  [PhraseNumeralType.Loan]: ['займ', 'займа', 'займов'],
};

export enum PhraseNumeralMode {
  Full = 'full',
  Single = 'single',
}
