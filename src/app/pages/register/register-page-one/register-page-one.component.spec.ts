import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPageOneComponent } from './register-page-one.component';

describe('RegisterPageOneComponent', () => {
  let component: RegisterPageOneComponent;
  let fixture: ComponentFixture<RegisterPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
