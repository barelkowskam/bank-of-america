import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MomentJsDatepickerComponent } from './moment-js-datepicker.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MomentJsDatepickerComponent', () => {
  let component: MomentJsDatepickerComponent;
  let fixture: ComponentFixture<MomentJsDatepickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ MomentJsDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentJsDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
