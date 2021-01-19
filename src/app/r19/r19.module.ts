import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R19RoutingModule } from './r19-routing.module';
import { R19Component } from './r19.component';


@NgModule({
  declarations: [R19Component],
  imports: [
    CommonModule,
    R19RoutingModule
  ]
})
export class R19Module { }
