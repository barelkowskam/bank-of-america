import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OpenMethodDatepickerComponent } from './open-method-datepicker.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('OpenMethodDatepickerComponent', () => {
  let component: OpenMethodDatepickerComponent;
  let fixture: ComponentFixture<OpenMethodDatepickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ OpenMethodDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenMethodDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
