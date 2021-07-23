import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';

@Injectable()
export class RussianMatDataAdapter extends NativeDateAdapter {
  parse(value: any): Date | null {
    const dateParts: string[] = value ? value.split('.') : [];

    if (dateParts.length === 3) {
      return super.parse(dateParts.reverse().join('-'));
    }

    return super.parse(value);
  }

  getFirstDayOfWeek(): number {
    return 1;
  }
}
