import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrefixSuffixFormFieldComponent } from './prefix-suffix-form-field.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PrefixSuffixFormFieldComponent', () => {
  let component: PrefixSuffixFormFieldComponent;
  let fixture: ComponentFixture<PrefixSuffixFormFieldComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ PrefixSuffixFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefixSuffixFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
