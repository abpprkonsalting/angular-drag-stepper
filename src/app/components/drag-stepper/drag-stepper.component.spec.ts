import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragStepperComponent } from './drag-stepper.component';

describe('DragStepperComponent', () => {
  let component: DragStepperComponent;
  let fixture: ComponentFixture<DragStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
