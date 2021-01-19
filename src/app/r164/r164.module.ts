import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R164RoutingModule } from './r164-routing.module';
import { R164Component } from './r164.component';


@NgModule({
  declarations: [R164Component],
  imports: [
    CommonModule,
    R164RoutingModule
  ]
})
export class R164Module { }
