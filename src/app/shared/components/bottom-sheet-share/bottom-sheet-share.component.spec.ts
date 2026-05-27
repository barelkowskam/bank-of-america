import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

import { BottomSheetShareComponent } from './bottom-sheet-share.component';

describe('BottomSheetShareComponent', () => {
  let component: BottomSheetShareComponent;
  let fixture: ComponentFixture<BottomSheetShareComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSheetShareComponent ],
      providers: [
        { provide: MatBottomSheetRef, useValue: {} }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
