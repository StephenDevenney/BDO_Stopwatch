import { ModuleWithProviders, NgModule } from '@angular/core';
import { StopwatchComponent } from '../layout/interface/main/stopwatch/stopwatch.component';
import { SharedModule } from '../shared/modules/sharedModule';



@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    StopwatchComponent
  ],
  exports: [
    StopwatchComponent
  ],
  providers: [
    
  ]
})

export class InterfaceModule { 
  static forRoot(): ModuleWithProviders<InterfaceModule> {
    return {
      ngModule: InterfaceModule
    }
  }
}

