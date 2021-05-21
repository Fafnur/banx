import { WrittenNumberLocale } from '@banx/russian/numerals/common';

export const UK_LOCALE: WrittenNumberLocale = {
  useLongScale: false,
  baseSeparator: ' ',
  unitSeparator: '',
  base: {
    '0': 'нуль',
    '1': 'один',
    '2': 'два',
    '3': 'три',
    '4': 'чотири',
    '5': 'п’ять',
    '6': 'шість',
    '7': 'сім',
    '8': 'вісім',
    '9': 'дев’ять',
    '10': 'десять',
    '11': 'одинадцять',
    '12': 'дванадцять',
    '13': 'тринадцять',
    '14': 'чотирнадцять',
    '15': 'п’ятнадцять',
    '16': 'шістнадцять',
    '17': 'сімнадцять',
    '18': 'вісімнадцять',
    '19': 'дев’ятнадцять',
    '20': 'двадцять',
    '30': 'тридцять',
    '40': 'сорок',
    '50': 'п’ятдесят',
    '60': 'шістдесят',
    '70': 'сімдесят',
    '80': 'вісімдесят',
    '90': 'дев’яносто',
    '100': 'сто',
    '200': 'двісті',
    '300': 'триста',
    '400': 'чотириста',
    '500': 'п’ятсот',
    '600': 'шістсот',
    '700': 'сімсот',
    '800': 'вісімсот',
    '900': 'дев’ятсот',
  },
  alternativeBase: {
    feminine: {
      '1': 'одна',
      '2': 'дві',
    },
  },
  units: [
    {
      useBaseInstead: true,
      useBaseException: [],
    },
    {
      singular: 'тисяча',
      few: 'тисячі',
      plural: 'тисяч',
      useAlternativeBase: 'feminine',
      useSingularEnding: true,
      useFewEnding: true,
      avoidEndingRules: [
        11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613,
        614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914,
      ],
    },
    {
      singular: 'мільйон',
      few: 'мільйони',
      plural: 'мільйонів',
      useSingularEnding: true,
      useFewEnding: true,
      avoidEndingRules: [
        11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613,
        614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914,
      ],
    },
    {
      singular: 'мільярд',
      few: 'мільярди',
      plural: 'мільярдів',
      useSingularEnding: true,
      useFewEnding: true,
      avoidEndingRules: [
        11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613,
        614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914,
      ],
    },
    {
      singular: 'трильйон',
      few: 'трильйони',
      plural: 'трильйонів',
      useSingularEnding: true,
      useFewEnding: true,
      avoidEndingRules: [
        11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613,
        614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914,
      ],
    },
    {
      singular: 'квадрильйон',
      few: 'квадрильйони',
      plural: 'квадрильйонів',
      useSingularEnding: true,
      useFewEnding: true,
      avoidEndingRules: [
        11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613,
        614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914,
      ],
    },
    {
      singular: 'квінтильйон',
      few: 'квінтильйони',
      plural: 'квінтильйонів',
      useSingularEnding: true,
      useFewEnding: true,
      avoidEndingRules: [
        11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613,
        614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914,
      ],
    },
    {
      singular: 'секстильйон',
      few: 'секстильйони',
      plural: 'секстильйонів',
      useSingularEnding: true,
      useFewEnding: true,
      avoidEndingRules: [
        11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613,
        614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914,
      ],
    },
    {
      singular: 'септілліон',
      few: 'септілліони',
      plural: 'септілліонів',
      useSingularEnding: true,
      useFewEnding: true,
      avoidEndingRules: [
        11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613,
        614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914,
      ],
    },
    {
      singular: 'октілліон',
      few: 'октілліони',
      plural: 'октілліонів',
      useSingularEnding: true,
      useFewEnding: true,
      avoidEndingRules: [
        11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613,
        614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914,
      ],
    },
    {
      singular: 'нонілліон',
      few: 'нонілліони',
      plural: 'нонілліонів',
      useSingularEnding: true,
      useFewEnding: true,
      avoidEndingRules: [
        11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613,
        614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914,
      ],
    },
    {
      singular: 'децілліон',
      few: 'децілліони',
      plural: 'децілліонів',
      useSingularEnding: true,
      useFewEnding: true,
      avoidEndingRules: [
        11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613,
        614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914,
      ],
    },
    {
      singular: 'ундецілліон',
      few: 'ундецілліони',
      plural: 'ундецілліонів',
      useSingularEnding: true,
      useFewEnding: true,
      avoidEndingRules: [
        11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613,
        614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914,
      ],
    },
    {
      singular: 'дуодецілліон',
      few: 'дуодецілліони',
      plural: 'дуодецілліонів',
      useSingularEnding: true,
      useFewEnding: true,
      avoidEndingRules: [
        11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613,
        614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914,
      ],
    },
    {
      singular: 'тредецілліон',
      few: 'тредецілліони',
      plural: 'тредецілліонів',
      useSingularEnding: true,
      useFewEnding: true,
      avoidEndingRules: [
        11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613,
        614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914,
      ],
    },
    {
      singular: 'кватуордецілліон',
      few: 'кватуордецілліони',
      plural: 'кватуордецілліонів',
      useSingularEnding: true,
      useFewEnding: true,
      avoidEndingRules: [
        11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613,
        614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914,
      ],
    },
    {
      singular: 'квіндецілліон',
      few: 'квіндецілліони',
      plural: 'квіндецілліонів',
      useSingularEnding: true,
      useFewEnding: true,
      avoidEndingRules: [
        11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613,
        614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914,
      ],
    },
  ],
  unitExceptions: {},
};
