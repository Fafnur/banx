import { Injectable } from '@angular/core';

import { Config } from './config.interface';

export const CONFIG_DEFAULT: Config = {
  apiHost: '',
};

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private readonly config: Config;

  constructor() {
    this.config = {
      apiHost: process.env.API_HOST ?? CONFIG_DEFAULT.apiHost,
    };
  }

  getConfig(): Config {
    return this.config;
  }
}
