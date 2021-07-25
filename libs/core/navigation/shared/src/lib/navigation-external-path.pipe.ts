import { Pipe, PipeTransform } from '@angular/core';

import { ApiService } from '@banx/core/api/service';
import { NavigationService } from '@banx/core/navigation/service';

@Pipe({
  name: 'externalPath',
})
export class NavigationExternalPathPipe implements PipeTransform {
  constructor(private readonly navigationService: NavigationService, private readonly apiService: ApiService) {}

  transform(path: string, params?: Record<string, string | number | undefined>): string {
    return this.apiService.makeUrl(this.navigationService.getRoute(path, params).join('/').slice(1));
  }
}
