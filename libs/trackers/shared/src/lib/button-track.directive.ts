import { Directive, HostListener, Input, Optional } from '@angular/core';

import { TrackerEventType } from '@banx/trackers/common';
import { TrackerFacade } from '@banx/trackers/state';

@Directive({
  selector:
    // eslint-disable-next-line max-len
    '[banxButtonTrack][trackId],[banxButtonTrack][trackId][href],[banxButtonTrack][trackId][routerLink],[banxButtonTrack][trackId][trackValue]',
})
export class ButtonTrackDirective {
  @Input() trackId!: string;
  @Input() href!: string;
  @Input() routerLink!: (string | number) | (string | number)[];
  @Input() trackValue!: string;

  constructor(@Optional() private readonly trackerLiteFacade: TrackerFacade) {}

  @HostListener('click')
  onClick(): void {
    this.trackerLiteFacade?.add({
      type: TrackerEventType.Click,
      time: new Date().toISOString(),
      element: this.trackId,
      value: this.trackValue ?? this.routerLink.toString() ?? this.href.toString() ?? '',
    });
  }
}
