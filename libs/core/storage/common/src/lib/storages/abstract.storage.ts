import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { AsyncStorage } from '../interfaces/storage.interface';

export const STORAGE_KEY = 'BANX_LOCAL_STATE';

export abstract class AbstractStorage implements AsyncStorage {
  readonly state$ = new ReplaySubject<Record<string, any>>(1);

  protected key = STORAGE_KEY;
  protected state: Record<string, any>;

  protected constructor(public readonly storage: Storage) {
    this.setState(this.getLocalState());
  }

  clear(): void {
    this.setState({});
  }

  getItem<T = any>(key: string): Observable<T> {
    // eslint-disable-next-line no-prototype-builtins
    return this.state$.pipe(map((state) => (state.hasOwnProperty(key) ? state[key] : null)));
  }

  removeItem(key: string): void {
    if (key in this.state) {
      delete this.state[key];

      this.setState({ ...this.state });
    }
  }

  setItem<T = any>(key: string, value: T): void {
    this.setState({ ...this.state, [key]: value });
  }

  protected setState(state: Record<string, any>): void {
    this.state = state;
    this.state$.next(this.state);
    this.setLocalState(this.state);
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
