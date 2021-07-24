import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { ContainerComponent } from '@banx/ui/container';

import { FooterComponent } from './footer.component';

describe('UiFooterComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        declarations: [FooterComponent, MockComponents(ContainerComponent)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });
});
