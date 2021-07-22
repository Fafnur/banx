import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { GridModule } from '@banx/russian/ui/grid';
import { ContainerModule } from '@banx/ui/container';

import { ContentHomePageComponent } from './content-home-page.component';

describe('ContentHomePageComponent', () => {
  let component: ContentHomePageComponent;
  let fixture: ComponentFixture<ContentHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockModule(ContainerModule), MockModule(GridModule)],
      declarations: [ContentHomePageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
