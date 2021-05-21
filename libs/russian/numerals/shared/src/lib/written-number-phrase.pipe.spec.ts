import { RU_LOCALE } from './locales/ru.locale';
import { WrittenNumberPipe } from './written-number.pipe';
import { WrittenNumberService } from './written-number.service';

describe('WrittenNumberPipe', () => {
  let pipe: WrittenNumberPipe;

  beforeEach(() => {
    pipe = new WrittenNumberPipe(new WrittenNumberService(RU_LOCALE));
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return correct form', () => {
    expect(pipe.transform(1)).toBe('один');
    expect(pipe.transform(11)).toBe('одинадцать');
    expect(pipe.transform(123)).toBe('сто двадцать три');
  });
});
