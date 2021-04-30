import { Observable } from 'rxjs';

export interface AsyncStorage {
  readonly storage: Storage;
  readonly state$: Observable<Record<string, any>>;

  getItem<T>(key: string): Observable<T>;
  setItem<T>(key: string, value: T): void;
  removeItem(key: string): void;
  clear(): void;
}
