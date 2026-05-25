import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomLoadingButtonsComponent } from './custom-loading-buttons.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CustomLoadingButtonsComponent', () => {
  let component: CustomLoadingButtonsComponent;
  let fixture: ComponentFixture<CustomLoadingButtonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ CustomLoadingButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLoadingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
