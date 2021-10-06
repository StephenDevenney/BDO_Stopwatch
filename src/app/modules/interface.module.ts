import { ModuleWithProviders, NgModule } from '@angular/core';
import { ButtonUIComponent } from '../layout/interface/general/button/button.component';
import { CheckboxUIComponent } from '../layout/interface/general/checkbox/checkbox.component';
import { DropdownUIComponent } from '../layout/interface/general/dropdown/dropdown.component';
import { InterfaceEnumService } from '../layout/interface/general/interface-enums/enum.service';
import { IconStartComponent } from '../layout/interface/icons/start/start.component';
import { IconStopComponent } from '../layout/interface/icons/stop/stop.component';
import { AddTimeComponent } from '../layout/interface/main/add-time/addTime.component';
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
    AddTimeComponent,
    IconStartComponent,
    IconStopComponent,
    ButtonUIComponent,
    DropdownUIComponent,
    CheckboxUIComponent
  ],
  exports: [
    StopwatchComponent,
    OverviewComponent,
    ViewToggleComponent,
    AddTimeComponent,
    IconStartComponent,
    IconStopComponent,
    ButtonUIComponent,
    DropdownUIComponent,
    CheckboxUIComponent
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

