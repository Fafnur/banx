import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'banx-error-title',
  templateUrl: './error-title.component.html',
  styleUrls: ['./error-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
