import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ApiContentTypeInterceptor } from './api-content-type.interceptor';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiContentTypeInterceptor,
      multi: true,
    },
  ],
})
export class ApiContentTypeModule {}
