import { Injectable } from '@angular/core';

import { AbstractStorage, storageAvailable } from '@banx/core/storage/common';
import { MemoryStorage } from '@banx/core/storage/memory';

@Injectable({
  providedIn: 'root',
})
export class SessionStorage extends AbstractStorage {
  constructor() {
    super(storageAvailable('sessionStorage') ? window.sessionStorage : new MemoryStorage());
  }
}
