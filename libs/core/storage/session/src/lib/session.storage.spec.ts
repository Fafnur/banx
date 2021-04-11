import { TestBed } from '@angular/core/testing';

import { SessionStorage } from './session.storage';

describe('SessionStorage', () => {
  let service: SessionStorage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [SessionStorage],
    }).compileComponents();

    service = TestBed.inject(SessionStorage);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
