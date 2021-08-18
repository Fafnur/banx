import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialGroupsComponent } from './social-groups.component';

describe('SocialGroupsComponent', () => {
  let component: SocialGroupsComponent;
  let fixture: ComponentFixture<SocialGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
