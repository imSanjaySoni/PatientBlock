import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SeedetailsComponent } from './seedetails/seedetails.component';
import { AddpatientComponent } from './addpatient/addpatient.component';


const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'seedetails',component:SeedetailsComponent
  },
  {
    path:'adddetains',component:AddpatientComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
