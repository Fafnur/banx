import { WrittenNumberLocale } from '../number-to-wrods.interface';

export const IT_LOCALE: WrittenNumberLocale = {
  useLongScale: false,
  baseSeparator: '',
  unitSeparator: '',
  generalSeparator: '',
  wordSeparator: '',
  base: {
    '0': 'zero',
    '1': 'uno',
    '2': 'due',
    '3': 'tre',
    '4': 'quattro',
    '5': 'cinque',
    '6': 'sei',
    '7': 'sette',
    '8': 'otto',
    '9': 'nove',
    '10': 'dieci',
    '11': 'undici',
    '12': 'dodici',
    '13': 'tredici',
    '14': 'quattordici',
    '15': 'quindici',
    '16': 'sedici',
    '17': 'diciassette',
    '18': 'diciotto',
    '19': 'diciannove',
    '20': 'venti',
    '21': 'ventuno',
    '23': 'ventitré',
    '28': 'ventotto',
    '30': 'trenta',
    '31': 'trentuno',
    '33': 'trentatré',
    '38': 'trentotto',
    '40': 'quaranta',
    '41': 'quarantuno',
    '43': 'quarantatré',
    '48': 'quarantotto',
    '50': 'cinquanta',
    '51': 'cinquantuno',
    '53': 'cinquantatré',
    '58': 'cinquantotto',
    '60': 'sessanta',
    '61': 'sessantuno',
    '63': 'sessantatré',
    '68': 'sessantotto',
    '70': 'settanta',
    '71': 'settantuno',
    '73': 'settantatré',
    '78': 'settantotto',
    '80': 'ottanta',
    '81': 'ottantuno',
    '83': 'ottantatré',
    '88': 'ottantotto',
    '90': 'novanta',
    '91': 'novantuno',
    '93': 'novantatré',
    '98': 'novantotto',
    '100': 'cento',
    '101': 'centuno',
    '108': 'centootto',
    '180': 'centottanta',
    '201': 'duecentuno',
    '301': 'trecentuno',
    '401': 'quattrocentuno',
    '501': 'cinquecentuno',
    '601': 'seicentuno',
    '701': 'settecentuno',
    '801': 'ottocentuno',
    '901': 'novecentuno',
  },
  unitExceptions: {
    '1': 'un',
  },
  units: [
    {
      singular: 'cento',
      avoidPrefixException: [1],
    },
    {
      singular: 'mille',
      plural: 'mila',
      avoidPrefixException: [1],
    },
    {
      singular: 'milione',
      plural: 'milioni',
    },
    {
      singular: 'miliardo',
      plural: 'miliardi',
    },
    {
      singular: 'bilione',
      plural: 'bilioni',
    },
    {
      singular: 'biliardo',
      plural: 'biliardi',
    },
    {
      singular: 'trilione',
      plural: 'trilioni',
    },
    {
      singular: 'triliardo',
      plural: 'triliardi',
    },
    {
      singular: 'quadrilione',
      plural: 'quadrilioni',
    },
    {
      singular: 'quadriliardo',
      plural: 'quadriliardi',
    },
  ],
};
