import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StartDateDatepickerComponent } from './start-date-datepicker.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('StartDateDatepickerComponent', () => {
  let component: StartDateDatepickerComponent;
  let fixture: ComponentFixture<StartDateDatepickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ StartDateDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartDateDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
