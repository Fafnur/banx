import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '@banx/core/config/service';

export interface ApiRequestOptions {
  headers: Record<string, any>;
  params: Record<string, any>;
  reportProgress: boolean;
  observe: any;
  responseType: any;
  withCredentials: boolean;
}

export function getApiRequestOptions(options?: Partial<ApiRequestOptions>): Partial<ApiRequestOptions> | undefined {
  if (options) {
    let params: Record<string, any> = {};
    let headers: Record<string, any> = {};
    if (options.headers) {
      headers = !(options?.headers instanceof HttpHeaders) ? new HttpHeaders(options.headers) : options.headers;
    }
    if (options.params) {
      params = new HttpParams();

      for (const propKey of Object.keys(options.params).sort()) {
        if (options.params[propKey] !== undefined) {
          if (Array.isArray(options.params[propKey])) {
            options.params[propKey].forEach((item) => {
              params = params.append(`${propKey}[]`, item == null ? 'NULL' : item.toString());
            });
          } else {
            params = params.append(propKey, options.params[propKey] == null ? 'NULL' : options.params[propKey].toString());
          }
        }
      }
    }

    return { ...options, params, headers };
  }

  return;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly httpClient: HttpClient, private readonly configService: ConfigService) {}

  makeUrl(url: string): string {
    return `${this.configService.getConfig().apiHost}${url}`;
  }

  get<T = void>(url: string, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.get<T>(this.makeUrl(url), getApiRequestOptions(options)).pipe(catchError((error) => throwError(error)));
  }

  post<T = void>(url: string, body?: unknown | null, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient
      .post<T>(this.makeUrl(url), body ?? null, getApiRequestOptions(options))
      .pipe(catchError((error) => throwError(error)));
  }

  patch<T = void>(url: string, body: unknown | null, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.patch<T>(this.makeUrl(url), body, getApiRequestOptions(options)).pipe(catchError((error) => throwError(error)));
  }

  put<T = void>(url: string, body: unknown | null, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.put<T>(this.makeUrl(url), body, getApiRequestOptions(options)).pipe(catchError((error) => throwError(error)));
  }

  delete<T = void>(url: string, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.delete<T>(this.makeUrl(url), getApiRequestOptions(options)).pipe(catchError((error) => throwError(error)));
  }
}
