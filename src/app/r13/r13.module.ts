import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R13RoutingModule } from './r13-routing.module';
import { R13Component } from './r13.component';


@NgModule({
  declarations: [R13Component],
  imports: [
    CommonModule,
    R13RoutingModule
  ]
})
export class R13Module { }
