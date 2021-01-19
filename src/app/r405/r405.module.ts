import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R405RoutingModule } from './r405-routing.module';
import { R405Component } from './r405.component';


@NgModule({
  declarations: [R405Component],
  imports: [
    CommonModule,
    R405RoutingModule
  ]
})
export class R405Module { }
