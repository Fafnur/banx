import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ConfigService } from '@banx/core/config/service';

import { ApiService } from './api.service';

export const apiErrorStub: Record<string, any> & { message: string; error: any } = {
  error: 'Error: API is error',
  message: 'API_Error',
};

export const apiMockError = { status: 400, statusText: 'Bad Request' };

export class HttpHandlerStub implements HttpHandler {
  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    return of(new HttpResponse({ body: req.body, status: 200, headers: req.headers }));
  }
}

@NgModule({
  imports: [HttpClientTestingModule],
  providers: [ConfigService, ApiService],
})
export class CoreApiTestingModule {}
