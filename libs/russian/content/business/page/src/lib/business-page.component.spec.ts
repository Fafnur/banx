import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { ContainerModule } from '@banx/ui/container';
import { GridModule } from '@banx/ui/grid';

import { BusinessPageComponent } from './business-page.component';

describe('CreditCardPageComponent', () => {
  let component: BusinessPageComponent;
  let fixture: ComponentFixture<BusinessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockModule(ContainerModule), MockModule(GridModule)],
      declarations: [BusinessPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
