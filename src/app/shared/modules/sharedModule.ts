import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StopwatchPipe } from '../pipes/pipes';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StopwatchPipe
  ],
  exports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    StopwatchPipe
  ],
  providers: [
    StopwatchPipe
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule
    }
  }
}
