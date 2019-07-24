import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, Component, OnInit, Injectable } from '@angular/core';
import { CdkStepper, CdkStep,StepperOptions } from '@angular/cdk/stepper';
import { CdkDragMove } from '@angular/cdk/drag-drop';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import {Subject} from 'rxjs';


@Component({
  selector: 'drag-stepper',
  templateUrl: './drag-stepper.component.html',
  styleUrls: ['./drag-stepper.component.less'],
  providers: [{ provide: CdkStepper , useExisting: DragStepperComponent }],
})
export class DragStepperComponent  extends CdkStepper implements OnInit {

  private _dragging: boolean = false;
  v_layout: boolean = false;
  private _tmpIndex: number = 0;

  constructor(dir: Directionality, changeDetectorRef: ChangeDetectorRef,public breakpointObserver: BreakpointObserver,protected messageSubscriber: DragStepperMessagesHandle<Partial<any>>)
  {
    super(dir, changeDetectorRef);
  }

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.v_layout = true;
        }
        else {
          this.v_layout = false;
        }
      });
      this.initExternalMessagesInput();
  }

  reset() {
    this.selectedIndex = 0;
  }

  dragStarted($event) {
    this._dragging = true;
  }
  dragEnded($event) {
    $event.source.reset();
    this.selectedIndex = this._tmpIndex;
  }

  dragMoved($event: CdkDragMove) {

    let distance : number = 0;
    if (this.v_layout == true) {
      distance = $event.distance.y;
    }
    else {
      distance = $event.distance.x;
    }

    if (this._dragging) {
      if (distance < -9) {
        if (this.selectedIndex < (this.steps.length - 1)) {
          this._tmpIndex = this.selectedIndex;
          this._tmpIndex++;
          this._dragging = false;
        }
      }
      else if (distance > 9){
        if (this.selectedIndex > 0) {
          this._tmpIndex = this.selectedIndex;
          this._tmpIndex--;
          this._dragging = false;

        }
      }
    }
  }

  prev(){
    this.selectedIndex--;
  }

  next(){
    this.selectedIndex++;
  }

  initExternalMessagesInput() {
    this.messageSubscriber.subscribe(message =>
      {
      let messageType = typeof (message.value);
      if ( messageType == 'string') {
        switch (message.value) {
          case "next":
              this.selectedIndex++;
            break;
          case "prev":
              this.selectedIndex--;
            break;
          default:
            break;
        }
      }
      else if (messageType == 'number' && message.value > 0 && message.value <= this.steps.length) {
        this.selectedIndex = message.value - 1;
      }
    });
  }
}

@Injectable({
  providedIn: 'root'
})
export class DragStepperMessagesHandle<T>
{
  protected observable = new Subject<T>();

  public next(item: T)
  {
    this.observable.next(item);
  }

  public subscribe(callback: (item:T)=>void) {
    this.observable.subscribe(callback);
  }
}

/*@Component({
  selector: 'drag-step',
  providers: [{ provide: CdkStep , useExisting: DragStepComponent }],
})
export class DragStepComponent  extends CdkStep {
  constructor(_stepper: DragStepperComponent)
  {
    super(_stepper);
  }
}*/
