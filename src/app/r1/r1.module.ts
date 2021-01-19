import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R1RoutingModule } from './r1-routing.module';
import { R1Component } from './r1.component';


@NgModule({
  declarations: [R1Component],
  imports: [
    CommonModule,
    R1RoutingModule
  ]
})
export class R1Module { }
