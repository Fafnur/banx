import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';

import { ConfigService } from '@banx/core/config/service';

import { ApiService } from './api.service';

export const apiErrorStub: Record<string, any> & { message: string; error: any } = {
  error: 'Error: API is error',
  message: 'API_Error',
};

export const apiMockError = { status: 400, statusText: 'Bad Request' };

@NgModule({
  imports: [HttpClientTestingModule],
  providers: [ConfigService, ApiService],
})
export class CoreApiTestingModule {}
