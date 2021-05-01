import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponents } from 'ng-mocks';

import { UiFooterComponent } from '../ui-footer/ui-footer.component';
import { UiHeaderComponent } from '../ui-header/ui-header.component';
import { UiMainComponent } from '../ui-main/ui-main.component';
import { UiLayoutComponent } from './ui-layout.component';

describe('UiLayoutComponent', () => {
  let component: UiLayoutComponent;
  let fixture: ComponentFixture<UiLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [UiLayoutComponent, MockComponents(UiHeaderComponent, UiMainComponent, UiFooterComponent)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
