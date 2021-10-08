import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryHandler } from '../../server/src/middleware/categoryHandler';
import { TimeSlotHandler } from '../../server/src/middleware/timeSlotHandler';
import { CategoryContext } from '../../server/src/sqlContext/categoryContext';
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
      CategoryHandler,
      CategoryContext,
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