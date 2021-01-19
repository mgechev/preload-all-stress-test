import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R500RoutingModule } from './r500-routing.module';
import { R500Component } from './r500.component';


@NgModule({
  declarations: [R500Component],
  imports: [
    CommonModule,
    R500RoutingModule
  ]
})
export class R500Module { }
