import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/modules/sharedModule';
import { TimerService } from './timer.service';
import { TimerComponent } from './timer-page/timer.component';

@NgModule({
  declarations: [
    TimerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    TimerService
  ]
})

export class TimerModule { 
  static forRoot(): ModuleWithProviders<TimerModule> {
    return {
      ngModule: TimerModule
    }
  }
}
