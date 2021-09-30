import { Injectable } from '@angular/core';

import { LocalSyncStorage } from '@banx/core/storage/local';
import { uuidv4 } from '@banx/core/utils';

export const VISITOR_UUID = 'visitorUuid';

@Injectable({
  providedIn: 'root',
})
export class VisitorService {
  constructor(private readonly localSyncStorage: LocalSyncStorage) {}

  getUuid(): string {
    let visitorUuid = this.localSyncStorage.getItem(VISITOR_UUID);
    if (!visitorUuid) {
      visitorUuid = uuidv4();
      this.localSyncStorage.setItem(VISITOR_UUID, visitorUuid);
    }

    return visitorUuid;
  }

  setUuid(visitorUuid: string): void {
    this.localSyncStorage.setItem(VISITOR_UUID, visitorUuid);
  }
}
