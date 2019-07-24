import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatIconModule, MatButtonModule, MatStepperModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragStepperComponent } from './components/drag-stepper/drag-stepper.component';
import { Step1Component } from './components/step1/step1.component';



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DragStepperComponent,
    Step1Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    FlexLayoutModule,
    DragDropModule,
    CdkStepperModule,
    LayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
