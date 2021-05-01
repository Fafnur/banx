import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiContentTypeInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type') && req.headers.get('enctype') !== 'multipart/form-data') {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    return next.handle(req);
  }
}
