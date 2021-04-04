import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'banx-error-logo',
  templateUrl: './error-logo.component.html',
  styleUrls: ['./error-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorLogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
