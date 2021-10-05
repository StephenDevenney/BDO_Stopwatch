import { ModuleWithProviders, NgModule } from '@angular/core';
import { PageComponent } from '../layout/page/page.component';
import { ContentComponent } from '../layout/page/content/content.component';
import { InterfaceModule } from './interface.module';
import { SharedModule } from '../shared/modules/sharedModule';

@NgModule({
  declarations: [
    PageComponent,
    ContentComponent
  ],
  imports: [
    SharedModule,
    InterfaceModule
  ],
  exports: [
    PageComponent,
    ContentComponent
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
