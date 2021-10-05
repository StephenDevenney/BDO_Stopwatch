import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './layout/page/page.component';

const routes: Routes = [
  { path: 'content', component: PageComponent, data: {page: 'content'} },
  { path: '**', redirectTo:'content', data: {page: 'content'} }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
