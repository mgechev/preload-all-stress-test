import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R117RoutingModule } from './r117-routing.module';
import { R117Component } from './r117.component';


@NgModule({
  declarations: [R117Component],
  imports: [
    CommonModule,
    R117RoutingModule
  ]
})
export class R117Module { }
