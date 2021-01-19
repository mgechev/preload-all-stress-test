import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R118RoutingModule } from './r118-routing.module';
import { R118Component } from './r118.component';


@NgModule({
  declarations: [R118Component],
  imports: [
    CommonModule,
    R118RoutingModule
  ]
})
export class R118Module { }
