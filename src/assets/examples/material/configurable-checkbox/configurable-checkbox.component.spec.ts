import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfigurableCheckboxComponent } from './configurable-checkbox.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ConfigurableCheckboxComponent', () => {
  let component: ConfigurableCheckboxComponent;
  let fixture: ComponentFixture<ConfigurableCheckboxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ ConfigurableCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurableCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
