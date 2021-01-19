import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R431RoutingModule } from './r431-routing.module';
import { R431Component } from './r431.component';


@NgModule({
  declarations: [R431Component],
  imports: [
    CommonModule,
    R431RoutingModule
  ]
})
export class R431Module { }
