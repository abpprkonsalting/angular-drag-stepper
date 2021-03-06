import { Component } from '@angular/core';
import { DragStepperMessagesHandle } from '../drag-stepper/drag-stepper.component';

@Component({
  selector: 'step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.less']
})
export class Step1Component {

  constructor(protected stepperMessagesHandle: DragStepperMessagesHandle<Partial<any>>) {}


  onCardClick(){
    this.stepperMessagesHandle.next({value:"next"});
  }

  gotoFive() {
    this.stepperMessagesHandle.next({value:5});
  }

}
