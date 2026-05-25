import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DifferentLocaleDatepickerComponent } from './different-locale-datepicker.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DifferentLocaleDatepickerComponent', () => {
  let component: DifferentLocaleDatepickerComponent;
  let fixture: ComponentFixture<DifferentLocaleDatepickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ DifferentLocaleDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentLocaleDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
