import { Injectable } from '@angular/core';

import { AbstractAsyncStorage } from '@banx/core/storage/common';

import { SessionSyncStorage } from './session-sync.storage';

@Injectable({
  providedIn: 'root',
})
export class SessionAsyncStorage extends AbstractAsyncStorage {
  protected key = '_eklst_';

  constructor(private readonly localSyncStorage: SessionSyncStorage) {
    super(localSyncStorage);
  }
}
