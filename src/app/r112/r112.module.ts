import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R112RoutingModule } from './r112-routing.module';
import { R112Component } from './r112.component';


@NgModule({
  declarations: [R112Component],
  imports: [
    CommonModule,
    R112RoutingModule
  ]
})
export class R112Module { }
