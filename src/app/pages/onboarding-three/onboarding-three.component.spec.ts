import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingThreeComponent } from './onboarding-three.component';

describe('OnboardingThreeComponent', () => {
  let component: OnboardingThreeComponent;
  let fixture: ComponentFixture<OnboardingThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
