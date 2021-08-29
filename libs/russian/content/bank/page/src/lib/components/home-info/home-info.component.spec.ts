import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { PATHS_STUB } from '@banx/core/navigation/common';
import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { ContainerModule } from '@banx/ui/container';

import { HomeInfoComponent } from './home-info.component';

describe('HomeInfoComponent', () => {
  let component: HomeInfoComponent;
  let fixture: ComponentFixture<HomeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MockModule(ContainerModule), MockModule(NavigationSharedModule)],
      declarations: [HomeInfoComponent],
      providers: [PATHS_STUB],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
