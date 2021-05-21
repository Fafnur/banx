import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'banx-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
