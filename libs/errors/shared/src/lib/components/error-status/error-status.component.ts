import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

export type ErrorStatusColor = 'primary' | 'accent' | 'active' | 'danger';

@Component({
  selector: 'banx-error-status',
  templateUrl: './error-status.component.html',
  styleUrls: ['./error-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorStatusComponent {
  @Input() color!: ErrorStatusColor;

  @HostBinding('class.is-primary') get isPrimary(): boolean {
    return this.color === 'primary';
  }

  @HostBinding('class.is-accent') get isAccent(): boolean {
    return this.color === 'accent';
  }

  @HostBinding('class.is-active') get isActive(): boolean {
    return this.color === 'active';
  }

  @HostBinding('class.is-danger') get isDanger(): boolean {
    return this.color === 'danger';
  }
}
