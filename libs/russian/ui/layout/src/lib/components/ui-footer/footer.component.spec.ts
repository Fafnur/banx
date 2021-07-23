import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { ContainerComponent } from '@banx/ui/container';

import { FooterComponent } from './footer.component';

describe('UiFooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent, MockComponents(ContainerComponent)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
