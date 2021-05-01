import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MockComponents } from 'ng-mocks';

import { UiContainerComponent } from '@banx/russian/ui/container';

import { UiHeaderComponent } from './ui-header.component';

describe('UiHeaderComponent', () => {
  let component: UiHeaderComponent;
  let fixture: ComponentFixture<UiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiHeaderComponent, MockComponents(UiContainerComponent, MatIcon, MatButton)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
