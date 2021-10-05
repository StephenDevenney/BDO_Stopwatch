import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { PageService } from './page.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PageComponent
  ],
  providers: [
    PageService
  ]
})
export class PageModule { 
  static forRoot(): ModuleWithProviders<PageModule> {
    return {
      ngModule: PageModule
    }
  }
}
