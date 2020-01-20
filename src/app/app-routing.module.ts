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
    path: 'seedetails', component: SeedetailsComponent
  },
  {
    path: 'addPatient', component: AddpatientComponent
  },
  // {
  //   path:'admin',
  //   loadChildren: () => import('./adminmodule/adminmodule.module').then(m => m.AdminmoduleModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
