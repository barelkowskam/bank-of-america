import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RipplelessSelectComponent } from './rippleless-select.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('RipplelessSelectComponent', () => {
  let component: RipplelessSelectComponent;
  let fixture: ComponentFixture<RipplelessSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ RipplelessSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RipplelessSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
