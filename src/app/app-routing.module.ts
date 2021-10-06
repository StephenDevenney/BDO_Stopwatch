import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './layout/page/page.component';

const routes: Routes = [
  { path: 'page', component: PageComponent, data: {page: 'page'} },
  { path: '**', redirectTo:'page', data: {page: 'page'} }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
