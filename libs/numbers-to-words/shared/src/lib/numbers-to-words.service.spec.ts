import { TestBed } from '@angular/core/testing';

import { NUMBER_LOCALE, RU_LOCALE } from '@banx/numbers-to-words/common';

import { NumbersToWordsService } from './numbers-to-words.service';

describe('WrittenNumberService', () => {
  let service: NumbersToWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NumbersToWordsService,
        {
          provide: NUMBER_LOCALE,
          useValue: RU_LOCALE,
        },
      ],
    });
    service = TestBed.inject(NumbersToWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct text', () => {
    expect(service.get(1)).toBe('один');
    expect(service.get(100)).toBe('сто');
    expect(service.get(12345)).toBe('двенадцать тысяч триста сорок пять');
  });
});
