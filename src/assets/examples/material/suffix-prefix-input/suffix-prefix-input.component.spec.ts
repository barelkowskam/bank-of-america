import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SuffixPrefixInputComponent } from './suffix-prefix-input.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SuffixPrefixInputComponent', () => {
  let component: SuffixPrefixInputComponent;
  let fixture: ComponentFixture<SuffixPrefixInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ SuffixPrefixInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuffixPrefixInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
