import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'banx-error-links',
  templateUrl: './error-links.component.html',
  styleUrls: ['./error-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorLinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
