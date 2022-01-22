import { Injectable } from '@angular/core';

import { Config } from './config.interface';

export const CONFIG_DEFAULT: Config = {
  apiHost: '',
  version: 'local',
};

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  readonly config: Config;

  constructor() {
    this.config = {
      apiHost: process.env['API_HOST'] ?? CONFIG_DEFAULT.apiHost,
      version: process.env['VERSION'] ?? CONFIG_DEFAULT.version,
    };
  }

  getConfig(): Config {
    return this.config;
  }
}
