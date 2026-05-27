import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomSnackbarOverviewComponent } from './custom-snackbar-overview.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CustomSnackbarOverviewComponent', () => {
  let component: CustomSnackbarOverviewComponent;
  let fixture: ComponentFixture<CustomSnackbarOverviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ CustomSnackbarOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSnackbarOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
