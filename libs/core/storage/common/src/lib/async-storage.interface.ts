import { Observable } from 'rxjs';

export interface AsyncStorage {
  readonly storage: Storage;

  getItem<T>(key: string): Observable<T>;
  setItem<T>(key: string, value: T): void;
  removeItem(key: string): void;
  clear(): void;
}
