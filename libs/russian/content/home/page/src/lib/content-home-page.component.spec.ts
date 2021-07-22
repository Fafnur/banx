import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { ContainerModule } from '@banx/ui/container';
import { GridModule } from '@banx/ui/grid';

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
