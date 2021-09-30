import { TestBed, waitForAsync } from '@angular/core/testing';
import { mock } from 'ts-mockito';

import { LocalSyncStorage } from '@banx/core/storage/local';
import { providerOf } from '@banx/core/testing';

import { VisitorService } from './visitor.service';

describe('VisitorService', () => {
  let service: VisitorService;
  let localSyncStorageMock: LocalSyncStorage;

  beforeEach(() => {
    localSyncStorageMock = mock(LocalSyncStorage);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        providers: [VisitorService, providerOf(LocalSyncStorage, localSyncStorageMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    service = TestBed.inject(VisitorService);
  });

  it('should create', () => {
    expect(service.getUuid()).toBeTruthy();
  });
});
