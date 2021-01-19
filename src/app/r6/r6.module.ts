import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R6RoutingModule } from './r6-routing.module';
import { R6Component } from './r6.component';


@NgModule({
  declarations: [R6Component],
  imports: [
    CommonModule,
    R6RoutingModule
  ]
})
export class R6Module { }
