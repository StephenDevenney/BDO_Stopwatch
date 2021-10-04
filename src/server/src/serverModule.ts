import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
      
    ],
    exports: [
      
    ],
    providers: [
      
    ]
  })
  export class ServerModule { 
    static forRoot(): ModuleWithProviders<ServerModule> {
      return {
        ngModule: ServerModule
      }
    }
  }