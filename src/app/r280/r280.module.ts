import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R280RoutingModule } from './r280-routing.module';
import { R280Component } from './r280.component';


@NgModule({
  declarations: [R280Component],
  imports: [
    CommonModule,
    R280RoutingModule
  ]
})
export class R280Module { }
