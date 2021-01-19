import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R339RoutingModule } from './r339-routing.module';
import { R339Component } from './r339.component';


@NgModule({
  declarations: [R339Component],
  imports: [
    CommonModule,
    R339RoutingModule
  ]
})
export class R339Module { }
