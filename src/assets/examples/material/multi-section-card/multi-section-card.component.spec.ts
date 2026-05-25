import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MultiSectionCardComponent } from './multi-section-card.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MultiSectionCardComponent', () => {
  let component: MultiSectionCardComponent;
  let fixture: ComponentFixture<MultiSectionCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ MultiSectionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
