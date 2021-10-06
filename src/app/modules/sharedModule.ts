import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StopwatchPipe } from '../shared/pipes/pipes';
import { StopwatchService } from '../shared/services/stopwatch.service';
import { ViewService } from '../shared/services/view.service';
import { LoadingService } from '../shared/services/loading.service';

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
    StopwatchPipe,
    StopwatchService,
    ViewService,
    LoadingService
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule
    }
  }
}
