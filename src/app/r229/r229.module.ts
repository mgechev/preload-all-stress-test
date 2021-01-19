import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R229RoutingModule } from './r229-routing.module';
import { R229Component } from './r229.component';


@NgModule({
  declarations: [R229Component],
  imports: [
    CommonModule,
    R229RoutingModule
  ]
})
export class R229Module { }
