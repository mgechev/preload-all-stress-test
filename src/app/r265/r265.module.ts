import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R265RoutingModule } from './r265-routing.module';
import { R265Component } from './r265.component';


@NgModule({
  declarations: [R265Component],
  imports: [
    CommonModule,
    R265RoutingModule
  ]
})
export class R265Module { }
