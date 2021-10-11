import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeSlotHandler } from '../../server/src/middleware/timeSlotHandler';
import { LocationContext } from '../../server/src/sqlContext/locationContext';
import { TimeSlotContext } from '../../server/src/sqlContext/timeSlotContext';
import { OverviewDataHandler } from '../../server/src/middleware/overviewDataHandler';
import { TotalTimeContext } from '../../server/src/sqlContext/totalTimeContext';
import { TerritoryContext } from '../../server/src/sqlContext/territoryContext';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
      
    ],
    exports: [
      
    ],
    providers: [
      OverviewDataHandler,
      TimeSlotHandler,
      LocationContext,
      TerritoryContext,
      TimeSlotContext,
      TotalTimeContext
    ]
  })
  export class ServerModule { 
    static forRoot(): ModuleWithProviders<ServerModule> {
      return {
        ngModule: ServerModule
      }
    }
  }