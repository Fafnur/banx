import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { UiContainerComponent } from '@banx/russian/ui/container';
import { ColumnComponent, RowComponent } from '@banx/russian/ui/grid';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent, MockComponents(UiContainerComponent, RowComponent, ColumnComponent)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
