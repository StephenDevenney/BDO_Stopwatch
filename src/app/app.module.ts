import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { RedirectToComponent } from './shared/components/redirect-to/redirectTo.component';
import { SharedModule } from './shared/modules/sharedModule';
import { APIInterceptor } from './shared/classes/api.interceptor';
import { LoadingService } from './shared/services/loading.service';
import { NgxUiLoaderModule, NgxUiLoaderConfig, POSITION, SPINNER, PB_DIRECTION } from 'ngx-ui-loader';
import { ContentModule } from './modules/content/content.module';
import { ViewportService } from './shared/services/viewport.service';
import { ActiveViewport } from './shared/classes/activeViewport';

/*
  bgs = bottomRight Small loader
  fgs = main center loader
  pb = top bar loader
*/
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#66b3ff',
  bgsPosition: POSITION.bottomRight,
  bgsSize: 100,
  bgsType: SPINNER.wanderingCubes,
  bgsOpacity: 0.8,
  fgsColor: '#66b3ff',
  fgsPosition: POSITION.centerCenter,
  fgsType: SPINNER.cubeGrid,
  fgsSize: 150,
  pbColor: '#66b3ff',
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
    LayoutModule,
    ContentModule,
    SharedModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },
    LoadingService,
    ActiveViewport,
    ViewportService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
