import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TwoWayBindingSelectComponent } from './two-way-binding-select.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TwoWayBindingSelectComponent', () => {
  let component: TwoWayBindingSelectComponent;
  let fixture: ComponentFixture<TwoWayBindingSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ TwoWayBindingSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayBindingSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
