import { Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';

export function createStore<S = Record<string, any>, P = Record<string, any>>(key: string, initialState: S, params: Partial<S> = {}): P {
  return {
    [key]: { ...initialState, ...params },
  } as any;
}

export function createState<S = Record<string, any>>(initialState: S, params: Partial<S> = {}): S {
  return { ...initialState, ...params };
}

export function setMockStore<S = Record<string, any>>(store: Store, key: string, initialState: S, params: Partial<S> = {}): void {
  (store as MockStore).setState(createStore(key, initialState, params));
}
