/*app-routing.module.ts */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GuardsGuard } from './authentication/guards.guard';

const routes: Routes = [
{
  path: 'admin',
  component: AdminComponent,
  canActivate: [GuardsGuard] 
},
{
  path: 'dashboard',
  component: DashboardComponent,
  canActivateChild: [GuardsGuard],
  children: [
    {
      path: 'users',
      component: UsersComponent
    }
  ]
},
{
  path: '404',
  component: PageNotFoundComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
