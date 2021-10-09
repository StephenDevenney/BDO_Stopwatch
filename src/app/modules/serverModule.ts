import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationHandler } from '../../server/src/middleware/locationHandler';
import { TimeSlotHandler } from '../../server/src/middleware/timeSlotHandler';
import { LocationContext, TerritoryContext } from '../../server/src/sqlContext/locationContext';
import { TimeSlotContext } from '../../server/src/sqlContext/timeSlotContext';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
      
    ],
    exports: [
      
    ],
    providers: [
      LocationHandler,
      LocationContext,
      TerritoryContext,
      TimeSlotHandler,
      TimeSlotContext
    ]
  })
  export class ServerModule { 
    static forRoot(): ModuleWithProviders<ServerModule> {
      return {
        ngModule: ServerModule
      }
    }
  }