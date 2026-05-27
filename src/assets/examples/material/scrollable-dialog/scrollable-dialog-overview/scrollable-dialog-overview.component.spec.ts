import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScrollableDialogOverviewComponent } from './scrollable-dialog-overview.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ScrollableDialogOverviewComponent', () => {
  let component: ScrollableDialogOverviewComponent;
  let fixture: ComponentFixture<ScrollableDialogOverviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ ScrollableDialogOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollableDialogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
