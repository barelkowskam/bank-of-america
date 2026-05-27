import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectedValueDatepickerComponent } from './selected-value-datepicker.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SelectedValueDatepickerComponent', () => {
  let component: SelectedValueDatepickerComponent;
  let fixture: ComponentFixture<SelectedValueDatepickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ SelectedValueDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedValueDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
