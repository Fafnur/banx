import { Observable } from 'rxjs';

export interface AsyncStorage {
  readonly storage: Storage;

  getItem<T>(key: string): Observable<T | null>;
  getItems<T>(keys: string[]): Observable<T>;
  setItem<T>(key: string, value: T): void;
  setItems<T extends Record<string, any> = Record<string, any>>(state: T): void;
  removeItem(key: string): void;
  removeItems(keys: string[]): void;
  clear(): void;
}
