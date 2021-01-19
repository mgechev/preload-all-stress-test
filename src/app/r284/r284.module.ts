import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R284RoutingModule } from './r284-routing.module';
import { R284Component } from './r284.component';


@NgModule({
  declarations: [R284Component],
  imports: [
    CommonModule,
    R284RoutingModule
  ]
})
export class R284Module { }
