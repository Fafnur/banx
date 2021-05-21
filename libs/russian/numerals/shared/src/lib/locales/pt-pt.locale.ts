import { WrittenNumberLocale } from '../written-number.interface';

export const PT_PT_LOCALE: WrittenNumberLocale = {
  useLongScale: true,
  baseSeparator: ' e ',
  unitSeparator: 'e ',
  andWhenTrailing: true,
  base: {
    '0': 'zero',
    '1': 'um',
    '2': 'dois',
    '3': 'três',
    '4': 'quatro',
    '5': 'cinco',
    '6': 'seis',
    '7': 'sete',
    '8': 'oito',
    '9': 'nove',
    '10': 'dez',
    '11': 'onze',
    '12': 'doze',
    '13': 'treze',
    '14': 'catorze',
    '15': 'quinze',
    '16': 'dezasseis',
    '17': 'dezassete',
    '18': 'dezoito',
    '19': 'dezanove',
    '20': 'vinte',
    '30': 'trinta',
    '40': 'quarenta',
    '50': 'cinquenta',
    '60': 'sessenta',
    '70': 'setenta',
    '80': 'oitenta',
    '90': 'noventa',
    '100': 'cem',
    '200': 'duzentos',
    '300': 'trezentos',
    '400': 'quatrocentos',
    '500': 'quinhentos',
    '600': 'seiscentos',
    '700': 'setecentos',
    '800': 'oitocentos',
    '900': 'novecentos',
    '1000': 'mil',
  },
  unitExceptions: {
    '1': 'um',
  },
  units: [
    {
      singular: 'cento',
      useBaseInstead: true,
      useBaseException: [1],
      useBaseExceptionWhenNoTrailingNumbers: true,
      andException: true,
    },
    {
      singular: 'mil',
      avoidPrefixException: [1],
      andException: true,
    },
    {
      singular: 'milhão',
      plural: 'milhões',
    },
    {
      singular: 'bilião',
      plural: 'biliões',
    },
    {
      singular: 'trilião',
      plural: 'triliões',
    },
    {
      singular: 'quadrilião',
      plural: 'quadriliões',
    },
    {
      singular: 'quintilião',
      plural: 'quintiliões',
    },
    {
      singular: 'sextilião',
      plural: 'sextiliões',
    },
    {
      singular: 'septilião',
      plural: 'septiliões',
    },
    {
      singular: 'octilião',
      plural: 'octiliões',
    },
    {
      singular: 'nonilião',
      plural: 'noniliões',
    },
    {
      singular: 'decilião',
      plural: 'deciliões',
    },
  ],
};
