import { Inject, Injectable, LOCALE_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormMaskService {
  constructor(@Inject(LOCALE_ID) private readonly localeId: string) {}

  getPhoneMask(): string {
    let mask: string;

    switch (this.localeId) {
      case 'en':
      case 'en-EN':
        mask = '+{44} 0000 000000';
        break;
      case 'ru':
      case 'ru-RU':
      default:
        mask = '+{7} 000 000-00-00';
    }

    return mask;
  }
}
