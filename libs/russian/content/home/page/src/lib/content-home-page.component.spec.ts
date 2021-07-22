import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { UiContainerModule } from '@banx/russian/ui/container';
import { GridModule } from '@banx/russian/ui/grid';

import { ContentHomePageComponent } from './content-home-page.component';

describe('ContentHomePageComponent', () => {
  let component: ContentHomePageComponent;
  let fixture: ComponentFixture<ContentHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockModule(UiContainerModule), MockModule(GridModule)],
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
