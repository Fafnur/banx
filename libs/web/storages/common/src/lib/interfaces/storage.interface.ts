import { Observable } from 'rxjs';

export interface AsyncStorage {
  readonly storage: Storage;
  readonly state$: Observable<Record<string, any>>;

  getItem<T>(key: string): Observable<T>;
  setItem<T>(key: string, value: T);
  removeItem(key: string);
  clear(): void;
}

export interface SyncStorage {
  readonly length: number;
  readonly storage: Storage;
  readonly state: Record<string, any>;

  getItem<T = any>(key: string): T;
  setItem<T>(key: string, value: T);
  removeItem(key: string);
  clear(): void;
}
