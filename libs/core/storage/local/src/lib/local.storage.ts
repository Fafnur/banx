import { Injectable } from '@angular/core';

import { AbstractStorage, storageAvailable } from '@banx/core/storage/common';
import { MemoryStorage } from '@banx/core/storage/memory';

@Injectable({
  providedIn: 'root',
})
export class LocalStorage extends AbstractStorage {
  constructor() {
    super(storageAvailable('localStorage') ? window.localStorage : new MemoryStorage());
  }
}
