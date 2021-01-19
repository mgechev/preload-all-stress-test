import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R383RoutingModule } from './r383-routing.module';
import { R383Component } from './r383.component';


@NgModule({
  declarations: [R383Component],
  imports: [
    CommonModule,
    R383RoutingModule
  ]
})
export class R383Module { }
