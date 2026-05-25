import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResetSelectComponent } from './reset-select.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ResetSelectComponent', () => {
  let component: ResetSelectComponent;
  let fixture: ComponentFixture<ResetSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ ResetSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
