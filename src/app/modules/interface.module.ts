import { ModuleWithProviders, NgModule } from '@angular/core';
import { ButtonUIComponent } from '../layout/interface/general/button/button.component';
import { InterfaceEnumService } from '../layout/interface/general/interface-enums/enum.service';
import { IconStartComponent } from '../layout/interface/icons/start/start.component';
import { IconStopComponent } from '../layout/interface/icons/stop/stop.component';
import { AddTimeComponent } from '../layout/interface/main/add-time/addTime.component';
import { OverviewComponent } from '../layout/interface/main/overview/overview.component';
import { StopwatchComponent } from '../layout/interface/main/stopwatch/stopwatch.component';
import { ViewToggleComponent } from '../layout/interface/main/view-toggle/viewToggle.component';
import { SharedModule } from './sharedModule';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ChartModule } from 'primeng/chart';

@NgModule({
  imports: [
    SharedModule,
    DropdownModule,
    InputSwitchModule,
    ChartModule
  ],
  declarations: [
    StopwatchComponent,
    OverviewComponent,
    ViewToggleComponent,
    AddTimeComponent,
    IconStartComponent,
    IconStopComponent,
    ButtonUIComponent
  ],
  exports: [
    StopwatchComponent,
    OverviewComponent,
    ViewToggleComponent,
    AddTimeComponent,
    IconStartComponent,
    IconStopComponent,
    ButtonUIComponent,
  ],
  providers: [
    InterfaceEnumService
  ]
})

export class InterfaceModule { 
  static forRoot(): ModuleWithProviders<InterfaceModule> {
    return {
      ngModule: InterfaceModule
    }
  }
}

