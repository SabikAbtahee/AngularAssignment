import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { ViewPersonComponent } from './view-person/view-person.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path     : 'person/view',
    component: ViewPersonComponent
  },
  {
    path     : 'person/create',
    component: CreatePersonComponent
  },
  {
    path     : 'user',
    component: UserComponent
  },
  {
    path     : 'dashboard',
    component: DashboardComponent
  },
  {
    path     : 'flexlayout',
    component: FlexLayoutComponent
  },
  {
    path      : '',
    redirectTo: '/user',
    pathMatch : 'full'
  },
  
  {
    path     : '**',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
