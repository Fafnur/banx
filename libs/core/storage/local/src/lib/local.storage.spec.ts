import { TestBed } from '@angular/core/testing';

import { MemoryStorage } from '@banx/core/storage/memory';

import { LocalStorage } from './local.storage';

describe('LocalStorage', () => {
  let service: LocalStorage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [LocalStorage, MemoryStorage],
    }).compileComponents();

    service = TestBed.inject(LocalStorage);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
