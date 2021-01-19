import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R379RoutingModule } from './r379-routing.module';
import { R379Component } from './r379.component';


@NgModule({
  declarations: [R379Component],
  imports: [
    CommonModule,
    R379RoutingModule
  ]
})
export class R379Module { }
