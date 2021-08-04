import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { ContainerModule } from '@banx/ui/container';

import { FooterMenuComponent } from './footer-menu.component';

describe('CopyrightComponent', () => {
  let component: FooterMenuComponent;
  let fixture: ComponentFixture<FooterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockModule(ContainerModule)],
      declarations: [FooterMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
