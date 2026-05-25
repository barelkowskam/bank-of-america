import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomPositionTooltipComponent } from './custom-position-tooltip.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CustomPositionTooltipComponent', () => {
  let component: CustomPositionTooltipComponent;
  let fixture: ComponentFixture<CustomPositionTooltipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ CustomPositionTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPositionTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
