import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AsyncStorage } from './async-storage.interface';

export const STORAGE_KEY = 'BANX_LOCAL_STATE';

export abstract class AbstractAsyncStorage implements AsyncStorage {
  protected readonly state$!: BehaviorSubject<Record<string, any>>;
  protected key = STORAGE_KEY;

  protected constructor(public readonly storage: Storage) {
    this.state$ = new BehaviorSubject<Record<string, any>>(this.getLocalState());
  }

  private get state(): Record<string, any> {
    return this.state$.getValue();
  }

  get length(): number {
    return Object.keys(this.state).length;
  }

  clear(): void {
    this.setState({});
  }

  getItem<T = any>(key: string): Observable<T | null> {
    return this.state$.pipe(map((state) => state[key] ?? null));
  }

  getItems<T = any>(keys: string[]): Observable<T> {
    return combineLatest(keys.map((key) => this.getItem(key))) as any;
  }

  removeItem(key: string): void {
    const state = { ...this.state };
    if (key in state) {
      delete state[key];

      this.setState(state);
    }
  }

  removeItems(keys: string[]): void {
    const state = { ...this.state };

    for (const key of keys) {
      if (key in state) {
        delete state[key];
      }
    }

    this.setState(state);
  }

  setItem<T = any>(key: string, value: T): void {
    this.setState({ ...this.state$.getValue(), [key]: value });
  }

  setItems<T extends Record<string, any> = Record<string, any>>(state: T): void {
    this.setState({ ...this.state$.getValue(), ...state });
  }

  protected setState(state: Record<string, any>): void {
    this.state$.next(state);
    this.setLocalState(state);
  }

  protected setLocalState(state: Record<string, any>): void {
    try {
      this.storage.setItem(this.key, JSON.stringify(state));
    } catch (error) {
      console.error(error);
    }
  }

  protected getLocalState(): Record<string, any> {
    const state = this.storage.getItem(this.key);

    return state ? JSON.parse(state) : {};
  }
}
