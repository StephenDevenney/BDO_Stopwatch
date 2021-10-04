import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './modules/content/content-page/content.component';

const routes: Routes = [
  { path: 'content', component: ContentComponent, data: {page: 'content'} },
  { path: '**', redirectTo:'content', data: {page: 'content'} }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
