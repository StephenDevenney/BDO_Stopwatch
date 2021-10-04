import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/modules/sharedModule';
import { ContentService } from './content.service';
import { ContentComponent } from './content-page/content.component';

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ContentService
  ]
})

export class ContentModule { 
  static forRoot(): ModuleWithProviders<ContentModule> {
    return {
      ngModule: ContentModule
    }
  }
}
