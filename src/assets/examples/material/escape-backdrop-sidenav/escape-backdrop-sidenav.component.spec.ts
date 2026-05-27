import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EscapeBackdropSidenavComponent } from './escape-backdrop-sidenav.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('EscapeBackdropSidenavComponent', () => {
  let component: EscapeBackdropSidenavComponent;
  let fixture: ComponentFixture<EscapeBackdropSidenavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ EscapeBackdropSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscapeBackdropSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
