import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R487RoutingModule } from './r487-routing.module';
import { R487Component } from './r487.component';


@NgModule({
  declarations: [R487Component],
  imports: [
    CommonModule,
    R487RoutingModule
  ]
})
export class R487Module { }
