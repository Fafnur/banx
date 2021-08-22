import { TestBed } from '@angular/core/testing';

import { AccordionModule } from './accordion.module';

describe('MenuAccordionModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AccordionModule).toBeTruthy();
  });
});
