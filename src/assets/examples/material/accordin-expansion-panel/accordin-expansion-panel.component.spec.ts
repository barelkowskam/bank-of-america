import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccordinExpansionPanelComponent } from './accordin-expansion-panel.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AccordinExpansionPanelComponent', () => {
  let component: AccordinExpansionPanelComponent;
  let fixture: ComponentFixture<AccordinExpansionPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      declarations: [ AccordinExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordinExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
