import { Injectable } from '@angular/core';

import { AbstractSyncStorage, storageAvailable } from '@banx/core/storage/common';
import { MemoryStorage } from '@banx/core/storage/memory';

@Injectable({
  providedIn: 'root',
})
export class SessionSyncStorage extends AbstractSyncStorage {
  constructor() {
    super(storageAvailable('sessionStorage') ? window.sessionStorage : new MemoryStorage());
  }
}
