import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BottomSheetOverviewComponent } from './bottom-sheet-overview.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

describe('BottomSheetOverviewComponent', () => {
  let component: BottomSheetOverviewComponent;
  let fixture: ComponentFixture<BottomSheetOverviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      providers: [{ provide: MatBottomSheetRef, useValue: {} }],
      declarations: [ BottomSheetOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
