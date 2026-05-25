import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgmodelRadioComponent } from './ngmodel-radio.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('NgmodelRadioComponent', () => {
  let component: NgmodelRadioComponent;
  let fixture: ComponentFixture<NgmodelRadioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ NgmodelRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmodelRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
