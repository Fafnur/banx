import 'jest-preset-angular/setup-jest';
import '@angular/localize/init';
import 'jest-canvas-mock';

import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

// https://github.com/ngrx/platform/issues/3243
// Teardown-Options can probably be removed when https://github.com/ngrx/platform/pull/3245 is closed and we update @ngrx/store.
beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(),
    { teardown: { destroyAfterEach: false } } // 👈
  );
});
