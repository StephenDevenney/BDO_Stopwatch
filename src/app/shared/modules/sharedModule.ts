import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageModule } from '../../layout/page/page.module';
import { PageComponent } from '../../layout/page/page.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PageModule
  ],
  declarations: [
    
  ],
  exports: [
    PageComponent,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule
    }
  }
}
