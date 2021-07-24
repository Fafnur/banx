import { FactoryProvider, Type } from '@angular/core';
import { instance } from 'ts-mockito';

/**
 * Return instance of mock
 *
 * @param token Angular provider token (token or service class)
 * @param mock Ts-mockito mock
 */
export function providerOf<T>(token: Type<T>, mock: T): FactoryProvider {
  return {
    provide: token,
    useFactory: (): T => instance(mock),
  };
}
