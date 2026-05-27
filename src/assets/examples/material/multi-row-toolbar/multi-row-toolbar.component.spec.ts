import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MultiRowToolbarComponent } from './multi-row-toolbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MultiRowToolbarComponent', () => {
  let component: MultiRowToolbarComponent;
  let fixture: ComponentFixture<MultiRowToolbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ MultiRowToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiRowToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
