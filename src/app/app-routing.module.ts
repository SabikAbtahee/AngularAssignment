import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { ViewPersonComponent } from './view-person/view-person.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
// import { Server } from 'https';

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
    path     : 'person/edit',
    component: EditPersonComponent
  },
  {
    path     : 'user',
    component: UserComponent
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
