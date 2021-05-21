import { TestBed } from '@angular/core/testing';

import { RU_LOCALE } from './locales/ru.locale';
import { NUMBER_LOCALE } from './written-number.interface';
import { WrittenNumberService } from './written-number.service';

describe('WrittenNumberService', () => {
  let service: WrittenNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WrittenNumberService,
        {
          provide: NUMBER_LOCALE,
          useValue: RU_LOCALE,
        },
      ],
    });
    service = TestBed.inject(WrittenNumberService);
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
