import { Pipe, PipeTransform } from '@angular/core';

import { SocialType } from '@banx/core/social/common';

@Pipe({
  name: 'socialIcon',
})
export class SocialIconPipe implements PipeTransform {
  transform(type: SocialType | null | undefined): string {
    return type ? `banx${type.charAt(0).toUpperCase()}${type.slice(1)}` : '';
  }
}
