import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingFourComponent } from './onboarding-four.component';

describe('OnboardingFourComponent', () => {
  let component: OnboardingFourComponent;
  let fixture: ComponentFixture<OnboardingFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
