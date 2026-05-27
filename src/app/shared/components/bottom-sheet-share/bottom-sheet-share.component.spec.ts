import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BottomSheetShareComponent } from './bottom-sheet-share.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

describe('BottomSheetShareComponent', () => {
  let component: BottomSheetShareComponent;
  let fixture: ComponentFixture<BottomSheetShareComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: MatBottomSheetRef, useValue: {} }],
      declarations: [ BottomSheetShareComponent ]
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
