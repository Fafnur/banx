import { Inject, Injectable, Optional } from '@angular/core';

import { NUMBER_LOCALE, WrittenNumberLocale, WrittenNumberOptions } from '@banx/numbers-to-words/common';

const shortScale = [100];
for (let i = 1; i <= 16; i++) {
  shortScale.push(Math.pow(10, i * 3));
}

const longScale = [100, 1000];
for (let i = 1; i <= 15; i++) {
  longScale.push(Math.pow(10, i * 6));
}

const DEFAULTS: WrittenNumberOptions = {
  noAnd: false,
  lang: 'en',
};

/**
 * @see https://github.com/yamadapc/js-written-number
 */
@Injectable()
export class NumbersToWordsService {
  constructor(@Optional() @Inject(NUMBER_LOCALE) private readonly numberLocale: WrittenNumberLocale) {}

  // eslint-disable-next-line complexity
  get(n: number, options: Partial<WrittenNumberOptions> = {}): string {
    options = { ...DEFAULTS, ...options };

    if (n < 0) {
      return '';
    }

    n = Math.round(+n);

    if (!this.numberLocale) {
      console.error('Number locale is not defined');
      return '';
    }

    const language = this.numberLocale;

    let scale = language.useLongScale ? longScale : shortScale;
    let units = language.units;
    let unit;

    if (!Array.isArray(units)) {
      const rawUnits = units;

      units = [];
      scale = Object.keys(rawUnits).map((value) => parseInt(value, 10));

      for (const index in scale) {
        units.push(rawUnits[scale[index]]);
        scale[index] = Math.pow(10, scale[index]);
      }
    }

    const baseCardinals = language.base;
    const alternativeBaseCardinals =
      options.alternativeBase && language.alternativeBase ? language.alternativeBase[options.alternativeBase] : {};

    if (language.unitExceptions && language.unitExceptions[n]) {
      return language.unitExceptions[n];
    }

    if (alternativeBaseCardinals[n]) {
      return alternativeBaseCardinals[n];
    }

    if (baseCardinals[n]) {
      return baseCardinals[n];
    }

    if (n < 100) {
      return this.handleSmallerThan100(n, language, baseCardinals, alternativeBaseCardinals, options);
    }

    const m = n % 100;
    let ret: string[] = [];

    if (m) {
      if (options.noAnd && !(language.andException && language.andException[10])) {
        ret.push(this.get(m, options));
      } else {
        ret.push(language.unitSeparator + this.get(m, options));
      }
    }

    let firstSignificant = 1;

    for (let index = 0, len = units.length; index < len; index++) {
      let r = Math.floor(n / scale[index]);
      let divideBy;

      if (index === len - 1) {
        divideBy = 1000000;
      } else {
        divideBy = scale[index + 1] / scale[index];
      }

      r %= divideBy;

      unit = units[index];

      if (!r) {
        continue;
      }
      firstSignificant = scale[index];

      if (typeof unit === 'object' && unit.useBaseInstead) {
        const shouldUseBaseException =
          unit.useBaseException &&
          Array.isArray(unit.useBaseException) &&
          unit.useBaseException.indexOf(r) > -1 &&
          (unit.useBaseExceptionWhenNoTrailingNumbers ? index === 0 && ret.length : true);
        if (!shouldUseBaseException) {
          ret.push(alternativeBaseCardinals[r * scale[index]] || baseCardinals[r * scale[index]]);
        } else {
          const res = r > 1 && typeof unit === 'object' && unit.plural ? unit.plural : unit.singular;
          if (res) {
            ret.push(res);
          }
        }
        continue;
      }

      let str;
      if (typeof unit === 'string') {
        str = unit;
      } else if (
        r === 1 ||
        (unit.useSingularEnding &&
          r % 10 === 1 &&
          (!unit.avoidEndingRules || (Array.isArray(unit.avoidEndingRules) && unit.avoidEndingRules.indexOf(r) < 0)))
      ) {
        str = unit.singular;
      } else if (
        unit.few &&
        ((r > 1 && r < 5) ||
          (unit.useFewEnding &&
            r % 10 > 1 &&
            r % 10 < 5 &&
            (!unit.avoidEndingRules || (Array.isArray(unit.avoidEndingRules) && unit.avoidEndingRules.indexOf(r) < 0))))
      ) {
        str = unit.few;
      } else {
        str = unit.plural && (!unit.avoidInNumberPlural || !m) ? unit.plural : unit.singular;

        // Languages with dual
        str = r === 2 && unit.dual ? unit.dual : str;

        // "restrictedPlural" : use plural only for 3 to 10
        str = r > 10 && unit.restrictedPlural ? unit.singular : str;
      }

      if (str && typeof unit === 'object' && Array.isArray(unit.avoidPrefixException) && unit.avoidPrefixException.indexOf(r) > -1) {
        ret.push(str);
        continue;
      }

      const exception = language.unitExceptions ? language.unitExceptions[r] : null;
      const number =
        exception ||
        this.get(r, {
          ...options,
          ...{
            noAnd: !((language.andException && language.andException[r]) || (typeof unit === 'object' && unit.andException)) && true,
            alternativeBase: typeof unit === 'object' ? unit.useAlternativeBase : undefined,
          },
        });
      n -= r * scale[index];
      ret.push(number + ' ' + str);
    }

    const firstSignificantN = firstSignificant * Math.floor(n / firstSignificant);
    const rest = n - firstSignificantN;

    if (language.andWhenTrailing && firstSignificant && 0 < rest && ret[0].indexOf(language.unitSeparator) !== 0) {
      ret = [ret[0], language.unitSeparator.replace(/\s+$/, '')].concat(ret.slice(1));
    }

    // Languages that have separators for all cardinals.
    if (language.allSeparator) {
      for (let j = 0; j < ret.length - 1; j++) {
        ret[j] = language.allSeparator + ret[j];
      }
    }

    return ret.reverse().join(' ');
  }

  private handleSmallerThan100(
    n: number,
    language: WrittenNumberLocale,
    baseCardinals: Record<string, string>,
    alternativeBaseCardinals: Record<string, string>,
    options: Partial<WrittenNumberOptions>
  ): string {
    const dec = Math.floor(n / 10) * 10;
    const sunit = n - dec;
    if (sunit) {
      return alternativeBaseCardinals[dec] || baseCardinals[dec] + language.baseSeparator + this.get(sunit, options);
    }

    return alternativeBaseCardinals[dec] || baseCardinals[dec];
  }
}
