import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AutoresizeSidenavComponent } from './autoresize-sidenav.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AutoresizeSidenavComponent', () => {
  let component: AutoresizeSidenavComponent;
  let fixture: ComponentFixture<AutoresizeSidenavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ AutoresizeSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresizeSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
