import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomizedStepperComponent } from './customized-stepper.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CustomizedStepperComponent', () => {
  let component: CustomizedStepperComponent;
  let fixture: ComponentFixture<CustomizedStepperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ CustomizedStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
