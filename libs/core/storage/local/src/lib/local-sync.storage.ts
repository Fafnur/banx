import { Injectable } from '@angular/core';

import { AbstractSyncStorage, storageAvailable } from '@banx/core/storage/common';
import { MemoryStorage } from '@banx/core/storage/memory';

@Injectable({
  providedIn: 'root',
})
export class LocalSyncStorage extends AbstractSyncStorage {
  constructor() {
    super(storageAvailable('localStorage') ? window.localStorage : new MemoryStorage());
  }
}
