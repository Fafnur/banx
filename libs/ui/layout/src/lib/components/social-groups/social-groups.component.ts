import { ChangeDetectionStrategy, Component, Inject, Input, Optional } from '@angular/core';

import { SOCIAL_GROUPS, SocialGroup } from '@banx/core/social/common';

@Component({
  selector: 'banx-social-groups',
  templateUrl: './social-groups.component.html',
  styleUrls: ['./social-groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialGroupsComponent {
  @Input() mode!: 'circle';

  constructor(@Optional() @Inject(SOCIAL_GROUPS) public readonly socialGroups: SocialGroup[] | null) {}
}
