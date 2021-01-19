import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R150RoutingModule } from './r150-routing.module';
import { R150Component } from './r150.component';


@NgModule({
  declarations: [R150Component],
  imports: [
    CommonModule,
    R150RoutingModule
  ]
})
export class R150Module { }
