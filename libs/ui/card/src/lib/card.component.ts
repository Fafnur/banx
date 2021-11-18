import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'banx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() color?: 'primary' | 'accent';

  @HostBinding('class.card-primary') get isPrimary(): boolean {
    return this.color === 'primary';
  }

  @HostBinding('class.card-accent') get isAccent(): boolean {
    return this.color === 'accent';
  }
}
