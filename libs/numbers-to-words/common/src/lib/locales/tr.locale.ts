import { WrittenNumberLocale } from '../number-to-wrods.interface';

export const TR_LOCALE: WrittenNumberLocale = {
  useLongScale: false,
  baseSeparator: ' ',
  unitSeparator: '',
  base: {
    '0': 'sıfır',
    '1': 'bir',
    '2': 'iki',
    '3': 'üç',
    '4': 'dört',
    '5': 'beş',
    '6': 'altı',
    '7': 'yedi',
    '8': 'sekiz',
    '9': 'dokuz',
    '10': 'on',
    '20': 'yirmi',
    '30': 'otuz',
    '40': 'kırk',
    '50': 'elli',
    '60': 'altmış',
    '70': 'yetmiş',
    '80': 'seksen',
    '90': 'doksan',
  },
  units: [
    {
      singular: 'yüz',
      avoidPrefixException: [1],
    },
    {
      singular: 'bin',
      avoidPrefixException: [1],
    },
    'milyon',
    'milyar',
    'trilyon',
    'katrilyon',
    'kentilyon',
    'sekstilyon',
    'septilyon',
    'oktilyon',
    'nonilyon',
    'desilyon',
    'andesilyon',
    'dodesilyon',
    'tredesilyon',
    'katordesilyon',
    'kendesilyon',
  ],
  unitExceptions: {},
};
