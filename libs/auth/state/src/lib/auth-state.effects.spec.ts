import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as AuthActions from './auth-state.actions';
import { AuthStateEffects } from './auth-state.effects';

describe('AuthEffects', () => {
  let actions: Observable<Action>;
  let effects: AuthStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [AuthStateEffects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(AuthStateEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AuthActions.init() });

      const expected = hot('-a-|', { a: AuthActions.loginSuccess({ auth: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
