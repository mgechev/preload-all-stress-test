import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R132RoutingModule } from './r132-routing.module';
import { R132Component } from './r132.component';


@NgModule({
  declarations: [R132Component],
  imports: [
    CommonModule,
    R132RoutingModule
  ]
})
export class R132Module { }
