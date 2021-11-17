import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { GridBreakpointType, mediaBreakpointDown, mediaBreakpointUp } from './grid.util';

@Injectable({
  providedIn: 'root',
})
export class GridService {
  constructor(private readonly breakpointObserver: BreakpointObserver) {}

  up(mode: GridBreakpointType = GridBreakpointType.Md): Observable<boolean> {
    return this.breakpointObserver.observe(mediaBreakpointUp(mode)).pipe(map((breakpoints) => breakpoints.matches));
  }

  down(mode: GridBreakpointType = GridBreakpointType.Md): Observable<boolean> {
    return this.breakpointObserver.observe(mediaBreakpointDown(mode)).pipe(map((breakpoints) => breakpoints.matches));
  }
}
