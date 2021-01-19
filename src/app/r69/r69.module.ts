import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R69RoutingModule } from './r69-routing.module';
import { R69Component } from './r69.component';


@NgModule({
  declarations: [R69Component],
  imports: [
    CommonModule,
    R69RoutingModule
  ]
})
export class R69Module { }
