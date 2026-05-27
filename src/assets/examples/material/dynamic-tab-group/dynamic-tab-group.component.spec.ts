import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicTabGroupComponent } from './dynamic-tab-group.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DynamicTabGroupComponent', () => {
  let component: DynamicTabGroupComponent;
  let fixture: ComponentFixture<DynamicTabGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ DynamicTabGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
