import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ApiService } from '@banx/core/api/service';
import { ConfigService } from '@banx/core/config/service';

export interface LoggerData {
  context: any;
  level: string;
  message: string;
  debug: boolean;
}

export interface LoggerEffectData extends LoggerData {
  force: boolean;
  skip: boolean;
}

export const LOGGER_API_ROUTES = {
  log: '/logger',
};

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private readonly url: string;

  constructor(private readonly configService: ConfigService, private readonly apiService: ApiService) {
    this.url = this.apiService.makeUrl('/logger');
  }

  log(data: Partial<LoggerData>): Observable<void> {
    const body: Partial<LoggerData> = { ...data };

    if (data.debug) {
      console.error(data);
    }

    body.context = {
      ...data.context,
      tag: this.configService.config.version,
    };

    if (!data.message) {
      body.message = 'JS unhandled error';
    }
    if (data.context?.error && !data.context?.stack) {
      body.context.stack = body.context.error?.stack?.toString();
    }

    return this.apiService.post(LOGGER_API_ROUTES.log, body);
  }

  /**
   * TODO: Rename to LogEffectAndDispatch()
   */
  logEffect(payload: Partial<LoggerEffectData>, action: Action = { type: '[Logger] Unknown action' }): Observable<void | Action> {
    return payload.force || (payload.context?.error?.status !== 0 && payload.context?.error?.isTrusted === true && !payload.skip)
      ? this.log(payload).pipe(switchMap(() => of(action)))
      : of(action);
  }
}
