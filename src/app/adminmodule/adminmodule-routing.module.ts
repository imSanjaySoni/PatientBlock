import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeedetailsComponent } from '../seedetails/seedetails.component';
import { AddpatientComponent } from '../addpatient/addpatient.component';
import { AdminmoduleComponent } from './adminmodule.component';


const routes: Routes = [
  {
    path:'',pathMatch:'full',component:AdminmoduleComponent
  },
  {
    path: 'seedetails', component: SeedetailsComponent
  },
  {
    path: 'adddetails', component: AddpatientComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminmoduleRoutingModule { }
