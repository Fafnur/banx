import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ApiWithCredentialsInterceptor } from './api-with-credentials.interceptor';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiWithCredentialsInterceptor,
      multi: true,
    },
  ],
})
export class ApiWithCredentialsModule {}
