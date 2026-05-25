import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnimationTabGroupComponent } from './animation-tab-group.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AnimationTabGroupComponent', () => {
  let component: AnimationTabGroupComponent;
  let fixture: ComponentFixture<AnimationTabGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ AnimationTabGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
