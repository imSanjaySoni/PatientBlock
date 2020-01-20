import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminmoduleRoutingModule } from './adminmodule-routing.module';
import { AdmincomponentComponent } from './admincomponent/admincomponent.component';
import { AdminmoduleComponent } from './adminmodule.component';


@NgModule({
  declarations: [AdmincomponentComponent, AdminmoduleComponent],
  imports: [
    CommonModule,
    AdminmoduleRoutingModule
  ]
})
export class AdminmoduleModule { }
