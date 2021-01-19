import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R389RoutingModule } from './r389-routing.module';
import { R389Component } from './r389.component';


@NgModule({
  declarations: [R389Component],
  imports: [
    CommonModule,
    R389RoutingModule
  ]
})
export class R389Module { }
