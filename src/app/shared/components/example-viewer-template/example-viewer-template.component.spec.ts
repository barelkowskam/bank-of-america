import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatxExampleViewerTemplateComponent as ExampleViewerTemplateComponent } from './example-viewer-template.component';

describe('ExampleViewerTemplateComponent', () => {
  let component: ExampleViewerTemplateComponent;
  let fixture: ComponentFixture<ExampleViewerTemplateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: ActivatedRoute, useValue: { snapshot: { params: {} } } }],
      declarations: [ ExampleViewerTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleViewerTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
