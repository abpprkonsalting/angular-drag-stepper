import { Component } from '@angular/core';
import { DragStepperMessagesHandle } from './components/drag-stepper/drag-stepper.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(protected stepperMessagesHandle: DragStepperMessagesHandle<Partial<any>>) {}

  gotoHome() {
    this.stepperMessagesHandle.next({value:1});
  }

  gotoThree() {
    this.stepperMessagesHandle.next({value:3});
  }

  prev() {
    this.stepperMessagesHandle.next({value:"prev"});
  }


}
