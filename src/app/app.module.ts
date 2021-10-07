import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedirectToComponent } from './shared/components/redirect-to/redirectTo.component';
import { APIInterceptor } from './shared/classes/api.interceptor';
import { NgxUiLoaderModule, NgxUiLoaderConfig, POSITION, SPINNER, PB_DIRECTION } from 'ngx-ui-loader';
import { InterfaceModule } from './modules/interface.module';
import { PageModule } from './modules/page.module';
import { SharedModule } from './modules/sharedModule';

/*
  bgs = bottomRight Small loader
  fgs = main center loader
  pb = top bar loader
*/
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#5484BC',
  bgsPosition: POSITION.bottomRight,
  bgsSize: 100,
  bgsType: SPINNER.wanderingCubes,
  bgsOpacity: 0.8,
  fgsColor: '#5484BC',
  fgsPosition: POSITION.centerCenter,
  fgsType: SPINNER.cubeGrid,
  fgsSize: 150,
  pbColor: '#5484BC',
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 20
};

@NgModule({
  declarations: [
    AppComponent,
    RedirectToComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    InterfaceModule,
    PageModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
