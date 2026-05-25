import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicDataTreeComponent } from './dynamic-data-tree.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DynamicDataTreeComponent', () => {
  let component: DynamicDataTreeComponent;
  let fixture: ComponentFixture<DynamicDataTreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ DynamicDataTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDataTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
