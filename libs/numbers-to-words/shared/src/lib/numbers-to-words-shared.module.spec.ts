import { TestBed } from '@angular/core/testing';

import { NumbersToWordsSharedModule } from './numbers-to-words-shared.module';

describe('NumbersToWordsSharedModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumbersToWordsSharedModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(NumbersToWordsSharedModule).toBeTruthy();
  });
});
