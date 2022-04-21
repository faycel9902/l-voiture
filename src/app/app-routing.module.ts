import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreerComponent } from './creer/creer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path : "login" , component : LoginComponent},
{ path : "app" , component : AppComponent } , 
{path : "creer" , component : CreerComponent},
{path:"dashboard" , component : DashboardComponent},
{path : "home" , component :  HomeComponent } , 
{path:"**" , component : HomeComponent}, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
