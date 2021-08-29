import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { ContainerModule } from '@banx/ui/container';
import { GridModule } from '@banx/ui/grid';

import { HomePageComponent } from './home-page.component';

describe('ContentHomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockModule(ContainerModule), MockModule(GridModule)],
      declarations: [HomePageComponent],
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
