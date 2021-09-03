import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import { USER_CREDENTIALS_STUB } from '@banx/users/common';

import { AuthStateEffects } from './auth-state.effects';
import { AuthStateFacade } from './auth-state.facade';
import { AUTH_FEATURE_KEY, reducer } from './auth-state.reducer';

describe('AuthFacade', () => {
  let facade: AuthStateFacade;

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(AUTH_FEATURE_KEY, reducer), EffectsModule.forFeature([AuthStateEffects])],
        providers: [AuthStateFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      facade = TestBed.inject(AuthStateFacade);
    });

    it('login() should login', async () => {
      let logged = await readFirst(facade.logged$);
      expect(logged).toBeFalsy();

      facade.login(USER_CREDENTIALS_STUB);

      logged = await readFirst(facade.logged$);
      expect(logged).toBeTruthy();
    });
  });
});
