import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomBarComponent } from './custom-bar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CustomBarComponent', () => {
  let component: CustomBarComponent;
  let fixture: ComponentFixture<CustomBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ CustomBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
