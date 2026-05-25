import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfigurableSidenavComponent } from './configurable-sidenav.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ConfigurableSidenavComponent', () => {
  let component: ConfigurableSidenavComponent;
  let fixture: ComponentFixture<ConfigurableSidenavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ ConfigurableSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurableSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
