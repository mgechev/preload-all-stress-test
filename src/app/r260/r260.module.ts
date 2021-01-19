import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R260RoutingModule } from './r260-routing.module';
import { R260Component } from './r260.component';


@NgModule({
  declarations: [R260Component],
  imports: [
    CommonModule,
    R260RoutingModule
  ]
})
export class R260Module { }
