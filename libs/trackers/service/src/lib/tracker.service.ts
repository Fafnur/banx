import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { ConfigService } from '@banx/core/config/service';
import { LocalAsyncStorage } from '@banx/core/storage/local';
import { uuidv4 } from '@banx/core/utils';
import { TrackerEvent, TrackerEventType, TrackerKeys, TrackerRecord } from '@banx/trackers/common';
import { UserStorageKeys } from '@banx/users/common';

@Injectable({
  providedIn: 'root',
})
export class TrackerService {
  private records: TrackerRecord[] = [];
  private repeats = 0;
  private lastRecord!: TrackerRecord;

  private sending: string[] = [];

  private readonly added$ = new Subject<void>();

  constructor(
    private readonly router: Router,
    private readonly localAsyncStorage: LocalAsyncStorage,
    private readonly configService: ConfigService,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  get recordAdded$(): Observable<void> {
    return this.added$.asObservable();
  }

  init(): void {
    this.document.addEventListener(TrackerEventType.Focus, () =>
      this.add({
        element: 'window',
        type: TrackerEventType.Focus,
      })
    );
    this.document.addEventListener(TrackerEventType.Blur, () =>
      this.add({
        element: 'window',
        type: TrackerEventType.Blur,
      })
    );
    this.document.addEventListener(TrackerEventType.VisibilityChange, () => {
      this.add({
        element: 'window',
        type: TrackerEventType.VisibilityChange,
        value: this.document.hidden ? 'invisible' : 'visible',
      });
    });
  }

  private get isStickyKeys(): boolean {
    return this.repeats > 100;
  }

  add(payload: TrackerEvent): void {
    const record = this.createRecord(payload);

    let stickyKeysFinish = null;
    if (
      this.lastRecord &&
      this.lastRecord.type === payload.type &&
      this.lastRecord.element === payload.element &&
      this.lastRecord.value === payload.value
    ) {
      this.repeats++;
    } else {
      if (this.isStickyKeys) {
        stickyKeysFinish = this.createRecord({
          element: payload.element,
          type: TrackerEventType.StickyKeyEnd,
          value: this.repeats.toString(),
          time: payload.time ? payload.time - 1 : Date.now(),
        });
      }
      this.repeats = 0;
    }

    if (!this.isStickyKeys) {
      if (stickyKeysFinish) {
        this.records.push(stickyKeysFinish);
      }
      this.records.push(record);
      // Save snapshot on storage
      this.localAsyncStorage.setItem(TrackerKeys.Records, this.records);
    }
    this.lastRecord = record;
    this.added$.next();
  }

  clear(): void {
    this.records = [];
  }

  getRecords(): TrackerRecord[] {
    return this.sending.length ? this.records.filter((record) => !this.sending.includes(record.id)) : this.records;
  }

  removeRecords(records: TrackerRecord[]): void {
    this.unmarkRecords(records);

    const ids = records.map((record) => record.id);
    this.records = this.records.filter((record) => !ids.includes(record.id));

    this.localAsyncStorage.setItem(TrackerKeys.Records, this.records);
  }

  markRecords(records: TrackerRecord[]): void {
    records.forEach((record) => this.sending.push(record.id));
  }

  unmarkRecords(records: TrackerRecord[]): void {
    const ids = records.map((record) => record.id);

    this.sending = this.sending.filter((recordId) => !ids.includes(recordId));
  }

  private createRecord(payload: TrackerEvent): TrackerRecord {
    const id = uuidv4();
    const time = payload.time ? payload.time : new Date().getTime();
    let value = payload.value;
    if (value == null || value === 'null') {
      value = '';
    }
    const keys = payload.keys ?? [];
    const url = this.router.url;
    const user = this.localAsyncStorage.state[UserStorageKeys.Id] ?? null;
    const data = { version: this.configService.config.version };

    return { id, type: payload.type, element: payload.element, url, time, value, keys, user, data };
  }
}
