import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/modules/sharedModule';
import { OverviewService } from './overview.service';
import { OverviewComponent } from './overview-page/overview.component';

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    OverviewService
  ]
})

export class OverviewModule { 
  static forRoot(): ModuleWithProviders<OverviewModule> {
    return {
      ngModule: OverviewModule
    }
  }
}
