import { ModuleWithProviders, NgModule } from '@angular/core';
import { PageComponent } from '../layout/page/page.component';
import { InterfaceModule } from './interface.module';
import { SharedModule } from './sharedModule';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    SharedModule,
    InterfaceModule
  ],
  exports: [
    PageComponent
  ],
  providers: [
    
  ]
})

export class PageModule { 
  static forRoot(): ModuleWithProviders<PageModule> {
    return {
      ngModule: PageModule
    }
  }
}
