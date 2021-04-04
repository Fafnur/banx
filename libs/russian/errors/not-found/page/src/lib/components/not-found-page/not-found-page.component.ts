import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'banx-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
