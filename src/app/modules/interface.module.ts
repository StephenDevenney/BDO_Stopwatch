import { ModuleWithProviders, NgModule } from '@angular/core';
import { IconStartComponent } from '../layout/interface/icons/start/start.component';
import { IconStopComponent } from '../layout/interface/icons/stop/stop.component';
import { OverviewComponent } from '../layout/interface/main/overview/overview.component';
import { StopwatchComponent } from '../layout/interface/main/stopwatch/stopwatch.component';
import { ViewToggleComponent } from '../layout/interface/main/view-toggle/viewToggle.component';
import { SharedModule } from './sharedModule';



@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    StopwatchComponent,
    OverviewComponent,
    ViewToggleComponent,
    IconStartComponent,
    IconStopComponent
  ],
  exports: [
    StopwatchComponent,
    OverviewComponent,
    ViewToggleComponent,
    IconStartComponent,
    IconStopComponent
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

