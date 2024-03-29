import { WrittenNumberLocale } from '../number-to-wrods.interface';

export const ND_LOCALE: WrittenNumberLocale = {
  useLongScale: false,
  baseSeparator: '',
  unitSeparator: 'og ',
  base: {
    '0': 'null',
    '1': 'en',
    '2': 'to',
    '3': 'tre',
    '4': 'fire',
    '5': 'fem',
    '6': 'seks',
    '7': 'syv',
    '8': 'åtte',
    '9': 'ni',
    '10': 'ti',
    '11': 'elleve',
    '12': 'tolv',
    '13': 'tretten',
    '14': 'fjorten',
    '15': 'femten',
    '16': 'seksten',
    '17': 'sytten',
    '18': 'atten',
    '19': 'nitten',
    '20': 'tjue',
    '30': 'tretti',
    '40': 'førti',
    '50': 'femti',
    '60': 'seksti',
    '70': 'sytti',
    '80': 'åtti',
    '90': 'nitti',
  },
  units: [
    {
      singular: 'ett hundre',
      avoidPrefixException: [1],
      plural: 'hundre',
    },
    {
      singular: 'ett tusen',
      avoidPrefixException: [1],
      plural: 'tusen',
    },
    {
      singular: 'million',
      plural: 'millioner',
    },
    {
      singular: 'milliard',
      plural: 'milliarder',
    },
    {
      singular: 'billion',
      plural: 'billioner',
    },
    {
      singular: 'billiard',
      plural: 'billiarder',
    },
    {
      singular: 'trillion',
      plural: 'trillioner',
    },
    {
      singular: 'trilliard',
      plural: 'trilliarder',
    },
    {
      singular: 'kvadrillion',
      plural: 'kvadrillioner',
    },
    {
      singular: 'kvadrilliard',
      plural: 'kvadrilliarder',
    },
    {
      singular: 'kvintillion',
      plural: 'kvintillioner',
    },
    {
      singular: 'kvintilliard',
      plural: 'kvintilliarder',
    },
    {
      singular: 'sekstillion',
      plural: 'sekstillioner',
    },
    {
      singular: 'sekstilliard',
      plural: 'sekstilliarder',
    },
    {
      singular: 'septillion',
      plural: 'septillioner',
    },
    {
      singular: 'septilliard',
      plural: 'septilliarder',
    },
    {
      singular: 'oktillion',
      plural: 'oktillioner',
    },
  ],
  unitExceptions: {},
};
