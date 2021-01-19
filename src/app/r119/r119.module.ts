import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R119RoutingModule } from './r119-routing.module';
import { R119Component } from './r119.component';


@NgModule({
  declarations: [R119Component],
  imports: [
    CommonModule,
    R119RoutingModule
  ]
})
export class R119Module { }
