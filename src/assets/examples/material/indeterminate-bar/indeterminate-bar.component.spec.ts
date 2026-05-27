import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IndeterminateBarComponent } from './indeterminate-bar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('IndeterminateBarComponent', () => {
  let component: IndeterminateBarComponent;
  let fixture: ComponentFixture<IndeterminateBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ IndeterminateBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndeterminateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
