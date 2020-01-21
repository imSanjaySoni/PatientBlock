import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminmoduleRoutingModule } from './adminmodule-routing.module';
import { AdminmoduleComponent } from './adminmodule.component';
import { AddpatientComponent } from '../addpatient/addpatient.component';
import { SeedetailsComponent } from '../seedetails/seedetails.component';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [AdminmoduleComponent,],
  imports: [
    CommonModule,
    AdminmoduleRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ]
})

export class AdminmoduleModule { }
