import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StickyColumnTableComponent } from './sticky-column-table.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('StickyColumnTableComponent', () => {
  let component: StickyColumnTableComponent;
  let fixture: ComponentFixture<StickyColumnTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ StickyColumnTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyColumnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
