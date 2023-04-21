import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { aboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './Admin/Admin.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { viewbusesComponent } from './viewbuses/viewbuses.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';
import { searchComponent } from './search/search.component';
import { booknowComponent } from './booknow/booknow.component';
import { ticketComponent } from './ticket/ticket.component';
import { regbusesComponent } from './regbuses/regbuses.component';

const routes: Routes = [

  {path:"",component:IndexComponent},
  {path:"login",component:LoginComponent},
  {path:"profile",component:ProfileComponent},
  {path:"Admin",component:AdminComponent},
  {path:"ticket",component:ticketComponent},
  {path:"about",component:aboutComponent},
  {path:"booknow",component:booknowComponent},
  {path:"regbuses",component:regbusesComponent},
  {path:"search",component:searchComponent},
   {path:"signup",component:SignupComponent},
   {path:"ContactUs",component:ContactUsComponent},
   {path:"customerDashboard",component:CustomerDashboardComponent},
   {path:"adminDashboard",component:AdminDashboardComponent},
   {path:"viewbuses",component:viewbusesComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
