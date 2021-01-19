import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R303RoutingModule } from './r303-routing.module';
import { R303Component } from './r303.component';


@NgModule({
  declarations: [R303Component],
  imports: [
    CommonModule,
    R303RoutingModule
  ]
})
export class R303Module { }
