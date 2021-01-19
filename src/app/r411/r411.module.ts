import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R411RoutingModule } from './r411-routing.module';
import { R411Component } from './r411.component';


@NgModule({
  declarations: [R411Component],
  imports: [
    CommonModule,
    R411RoutingModule
  ]
})
export class R411Module { }
