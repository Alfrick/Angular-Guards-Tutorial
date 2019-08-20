/* app.module.ts */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthenticationService } from './authentication/authentication.service';
import { GuardsGuard } from './authentication/guards.guard';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    UsersComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    GuardsGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
